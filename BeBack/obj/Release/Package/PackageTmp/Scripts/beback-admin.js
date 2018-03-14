(function () {
    var clock;

    //This line is uncommented when publishing the project
    var connection = $.hubConnection('/beback/signalr', {useDefaultPath: false}),
        hub = connection.createHubProxy('serverHub');

    //This line is uncommented when developing localy
    //var connection = $.hubConnection(),
    //    hub = connection.createHubProxy('serverHub');

    connection.start()
        .done(function () { console.log("Connected to hub."); })
        .fail(function () { console.log("failed to connect to hub."); });

    $('#btn15').click(function (e) {
        hub.invoke('StartTimer', 900, $('#txtTitle').val(), $('#txtSubtitle').val(), $('#txtMessage').val());
    });

    $('#btn30').click(function (e) {
        hub.invoke('StartTimer', 1800, $('#txtTitle').val(), $('#txtSubtitle').val(), $('#txtMessage').val());
    });

    $('#btn60').click(function (e) {
        hub.invoke('StartTimer', 3600, $('#txtTitle').val(), $('#txtSubtitle').val(), $('#txtMessage').val());
    });

    $('#btnCustom').click(function (e) {
        var seconds = $("#txtCustom").val() * 60;
        hub.invoke('StartTimer', seconds, $('#txtTitle').val(), $('#txtSubtitle').val(), $('#txtMessage').val());
    });

    $('#btnHideClock').click(function () {
        hub.invoke('HideClock');
    });

    $('#btnPageReload').click(function () {
        hub.invoke('PageReload');
    });

    $('#btnTitle').click(function () {
        hub.invoke('ChangeTitle', $('#txtTitle').val());
    });

    $('#btnSubtitle').click(function () {
        hub.invoke('ChangeSubtitle', $('#txtSubtitle').val());
    });

    $('#btnMessage').click(function () {
        hub.invoke('ChangeMessage', $('#txtMessage').val());
    });
    $('#btnSubmit').click(function () {
        hub.invoke('ChangeText', $('#txtTitle').val(), $('#txtSubtitle').val(), $('#txtMessage').val());
    });


    $('#btnShowWeek').click(function () {
        hub.invoke('ShowWeek');
    });

    $('#btnShowMonth').click(function () {
        hub.invoke('ShowMonth');
    });


})();