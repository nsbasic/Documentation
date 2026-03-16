function Main() {
  StartScheduler();
}

function StartScheduler() {
  $("#Scheduler1").jqxScheduler({


    editDialogCreate: function(dialog, fields, editAppointment) {
      fields.repeatContainer.hide();
      fields.statusContainer.hide();
      fields.timeZoneContainer.hide();
      fields.colorContainer.hide();
      fields.subjectLabel.html("Title");
      //fields.locationLabel.html("Ort");
      fields.locationLabel.hide();
      fields.location.hide();
      fields.fromLabel.html("Von");
      fields.toLabel.html("Bis");
      fields.resourceLabel.html("calender");
    },

    appointmentDataFields: {
      from: "Start",
      to: "End",
      id: "id",
      description: "description",
      location: "place",
      subject: "subject",
      resourceId: "calender"
    },
    views: [
      'dayView',
      'weekView',
      'monthView',
      'agendaView'
    ]
  });
  appointments = [];

  appointment1 = {
    id: "id1",
    description: "Desc: ID 1",
    place: "ID 1",
    subject: "Meet ID 1",
    calender: "Room 1",
    Start: new $.jqx.date(2016, 02, 21, 9, 0, 0),
    End: new $.jqx.date(2016, 02, 22, 16, 0, 0)
  };

  appointment2 = {
    id: "id2",
    description: "Desc: ID 2",
    place: "ID 2",
    subject: "Meet ID 2",
    calender: "Room 2",
    Start: new Date("02/21/2016 09:00:00"),
    End: new Date("02/21/2016 10:00:00")
  };
  appointment3 = {
    id: "id3",
    description: "desc: ID 3",
    place: "ID 3",
    subject: "Meet ID 3",
    calender: "Room 3",
    Start: new Date("02/22/2016 09:00:00"),
    End: new Date("02/23/2016 17:00:00")
  };

  appointments[0] = appointment1;
  appointments[1] = appointment2;
  appointments[2] = appointment3;

  //prepare the data
  source = [];
  source = {
    dataType: "array",
    dataFields: [{
      name: "id",
      type: "string"
    }, {
      name: "description",
      type: "string"
    }, {
      name: "location",
      type: "string"
    }, {
      name: "subject",
      type: "string"
    }, {
      name: "calender",
      type: "string"
    }, {
      name: "Start",
      type: "date"
    }, {
      name: "End",
      type: "date"
    }],
    id: "id",
    localData: appointments
  };

  adapter = new $.jqx.dataAdapter(source);
  $("#Scheduler1").jqxScheduler({
    source: adapter
  });

  datum1 = new $.jqx.date(2016, 2, 25, 9, 0, 0);
  $("#Scheduler1").jqxScheduler({
    Date: datum1
  });
  $("#Scheduler1").jqxScheduler("ensureAppointmentVisible", "id3");

  res = {
    colorScheme: "scheme05",
    dataField: "calender",
    source: new $.jqx.dataAdapter(source)
  };

  $("#Scheduler1").jqxScheduler({
    resources: res
  });


  appointment4 = {
    id: "id4",
    description: "desc: ID 4",
    place: "ID 4",
    subject: "Meet ID 4",
    calendar: "Room 2",
    Start: new Date("02/24/2016 09:00:00"),
    End: new Date("02/25/2016 17:00:00")
  };
  $("#Scheduler1").jqxScheduler("addAppointment", appointment4);

  $("#Scheduler1").jqxScheduler({
    view: "monthView"
  });
  legendbarbottomScheduler1.style.display = "block";
}