function doGet() { return ContentService.createTextOutput('Servicio de resultados activo.'); }

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents || '{}');
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Resultados') || ss.insertSheet('Resultados');
    var qs = data.answers || [];
    if (sheet.getLastRow() === 0) {
      var headers = ['Fecha y hora','Nombre','Código / grupo','Puntaje','Total','Porcentaje'];
      qs.forEach(function(q){ headers.push('P' + q.question); });
      sheet.appendRow(headers);
      sheet.setFrozenRows(1);
      sheet.getRange(1,1,1,headers.length).setFontWeight('bold');
    }
    var row = [new Date(), String(data.name || ''), String(data.code || ''), Number(data.score || 0), Number(data.total || 0), String(data.percentage || '') + '%'];
    qs.forEach(function(q){ row.push(String.fromCharCode(65 + Number(q.selected))); });
    sheet.appendRow(row);
    return ContentService.createTextOutput(JSON.stringify({ok:true})).setMimeType(ContentService.MimeType.JSON);
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ok:false,error:String(err)})).setMimeType(ContentService.MimeType.JSON);
  }
}
