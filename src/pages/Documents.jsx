import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import mammoth from "mammoth";
import * as XLSX from "xlsx";
import Layout from "../components/Layout";

export default function Documents() {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileContent, setFileContent] = useState("");

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setUploadedFile(acceptedFiles[0]);
      handleFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: ".pdf, .docx, .xlsx",
    onDrop,
  });

  const handleFile = (file) => {
    const fileType = file.type;

    // Process Word file (.docx)
    if (
      fileType ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const arrayBuffer = e.target.result;
        mammoth.extractRawText({ arrayBuffer }).then((result) => {
          setFileContent(result.value); // Set Word content as plain text
        });
      };
      reader.readAsArrayBuffer(file);
    }

    // Process Excel file (.xlsx)
    if (
      fileType ===
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const binaryString = e.target.result;
        const workbook = XLSX.read(binaryString, { type: "binary" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const data = XLSX.utils.sheet_to_html(sheet);
        setFileContent(data); // Set Excel content as HTML
      };
      reader.readAsBinaryString(file);
    }

    // Process PDF file (.pdf)
    if (fileType === "application/pdf") {
      setFileContent(""); // PDF can be rendered in iframe, no need for text parsing
    }
  };

  return (
    <Layout title="Documents IA">
      {!uploadedFile ? (
        <div className="flex items-center justify-center h-screen">
          <div
            {...getRootProps()}
            className="border-2 border-dashed p-6 rounded-lg text-center cursor-pointer bg-gray-50"
          >
            <input {...getInputProps()} />
            <p>Drag and drop a file here, or click to select one</p>
            <p className="text-sm text-gray-500">
              Supported formats: PDF, DOCX, XLSX
            </p>
          </div>
        </div>
      ) : (
        <div className="flex md:flex-row flex-col w-full justify-center h-screen">
          {/* Chat Sidebar */}
          <div className="w-[100%] md:w-[50%] border-r bg-gray-100 p-5">
            <div className="h-[100%] md:h-[90%] flex flex-col bg-white rounded-lg shadow-lg p-4">
              <div className="flex-1 overflow-y-auto">
                <div className="w-full md:h-full min-h-[200px] rounded-lg bg-[#e7eaee] border-2 border-slate-300"></div>
              </div>
              <div className="flex md:flex-row flex-col mt-4">
                <input
                  type="text"
                  placeholder="Escribe tu mensaje..."
                  className="w-full border p-2 rounded"
                />
                <div className="flex md:pt-0 pt-4">
                  <button className="bg-blue-800 hover:bg-blue-700 text-white font-bold mx-2 py-2 px-4 rounded">
                    Enviar
                  </button>
                  <button className="bg-gray-300 hover:bg-gray-600text-white  mx-2 py-2 px-4 rounded">
                    Adjuntar
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* File Viewer */}
          <div className="w-[100%] md:w-[50%]">
            {uploadedFile.type === "application/pdf" ? (
              <iframe
                src={URL.createObjectURL(uploadedFile)}
                title="PDF Viewer"
                className="w-full h-[500px] border"
              />
            ) : uploadedFile.type ===
              "application/vnd.openxmlformats-officedocument.wordprocessingml.document" ? (
              <div
                className="w-full h-[500px] overflow-y-auto border p-4"
                dangerouslySetInnerHTML={{ __html: fileContent }}
              />
            ) : uploadedFile.type ===
              "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" ? (
              <div
                className="w-full h-[500px] overflow-y-auto border p-4"
                dangerouslySetInnerHTML={{ __html: fileContent }}
              />
            ) : null}
          </div>
        </div>
      )}{" "}
    </Layout>
  );
}
