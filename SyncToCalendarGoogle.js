function syncToCalendar() {
  var spreadsheet   = SpreadsheetApp.getActiveSheet();
  var calendarId    = spreadsheet.getRange("H2").getValue();
  var eventCal      = CalendarApp.getCalendarById(calendarId);
  var datamentah1   = spreadsheet.getRange("A11:B18").getValues();

  /** Opsi jika ada 2 tabel yang terpisah */
  var datamentah2   = spreadsheet.getRange("A43:B50").getValues();

  /** Inisialisasi Data untuk memeriksa data selama Tahun 2025 */
  var januari25   = "Wed Jan 1 2025 00:00:00 GMT+0700 (Western Indonesia Time)";
  var desember25  = "Wed Dec 31 2025 00:00:00 GMT+0700 (Western Indonesia Time)";
  var feb1        = "Sat Feb 1 2025 00:00:00 GMT+0700 (Western Indonesia Time)";
  var feb28       = "Fri Feb 31 2025 00:00:00 GMT+0700 (Western Indonesia Time)"
  var desc = ""

  /** Menghapus data yang kosong */
  var data  = datamentah1.filter( item => item[0] !== '' || item[1] !== '');
  var data2 = datamentah2.filter( item => item[0] !== '' || item[1] !== '');
  var titledatas2 = data2.map(item => item[1])
  // console.log(titledata2);

  /** Memeriksa apakah ada data di google Calender selama Tahun 2025 */
  var events = eventCal.getEvents(new Date(januari25), new Date(desember25),{description: desc}).map(function(events){
      try{
        return events.getTitle();
      }
      catch{
        return "";
      }
    });

/** Data di Tabel Pertama */
  for(x=0;x<data.length;x++){
      var kolom = data[x];
      var startTime = kolom[0];
      var endTime = kolom[0];
      var title = kolom[1];

      // eventCal.createEvent(title,new Date(startTime),new Date(endTime),{description: ""});
      
  }

/** Data di Tabel Kedua */

  for(x=0;x<data2.length;x++){
      var kolomdata2 = data2[x];
      var startTimedata2 = kolomdata2[0];
      var endTimedata2 = kolomdata2[0];
      var titledata2 = kolomdata2[1];
      if(events.includes(titledata2)){
        // console.log("gak Masukkin Data")
        "";
      } else{
        //console.log("Masukkin Data")
        console.log(startTimedata2)
        eventCal.createEvent(titledata2,new Date(startTimedata2),new Date(endTimedata2),{description: ""});
      }
    }

}

function onOpen() {
  // Add a custom menu to the spreadsheet.
  SpreadsheetApp.getUi() // Or DocumentApp, SlidesApp, or FormApp.
      .createMenu('Sinkronasi ke kalender')
      .addItem('Sinkronasikan Sekarang', 'syncToCalendar')
      .addToUi();
}

/** Merubah Tanggal menjadi format DD/MM/YYYY */
      /** function convert(str) {
        var date = new Date(str),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return [day, mnth, date.getFullYear()].join("/");
      }
      console.log(convert(tanggal)) **/