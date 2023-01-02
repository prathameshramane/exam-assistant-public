const filesaver = require("file-saver");
const xlsx = require("xlsx");
const Blob = require("cross-blob");

export function downloadAsExcel(examData, filename) {
  const data = examData;

  const worksheet = xlsx.utils.json_to_sheet(data);
  const workbook = {
    Sheets: {
      data: worksheet,
    },
    SheetNames: ["data"],
  };
  const excelBuffer = xlsx.write(workbook, { bookType: "xlsx", type: "array" });
  saveAsExcel(excelBuffer, filename);
}

function saveAsExcel(buffer, filename) {
  const EXCEL_TYPE =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const EXCEL_EXTENSION = ".xlsx";
  const data = new Blob([buffer], { type: EXCEL_TYPE });
  filesaver.saveAs(
    data,
    filename + EXCEL_EXTENSION
  );
}
