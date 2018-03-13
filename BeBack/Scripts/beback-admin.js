(function () {
    var clock;
    var connection = $.hubConnection('/beback/signalr', {useDefaultPath: false}),
        hub = connection.createHubProxy('serverHub');

    //var connection = $.hubConnection(),
    //    hub = connection.createHubProxy('serverHub');

    connection.start()
        .done(function () { console.log("Connected to hub."); })
        .fail(function () { console.log("failed to connect to hub."); });

    $('#btn15').click(function (e) {
        hub.invoke('StartTimer', 900);
    });

    $('#btn30').click(function (e) {
        hub.invoke('StartTimer', 1800);
    });

    $('#btn60').click(function (e) {
        hub.invoke('StartTimer', 3600);
    });

    $('#btnCustom').click(function (e) {
        var milliseconds = $("#txtCustom").val();
        hub.invoke('StartTimer', milliseconds);
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

    $('#btnShowWeek').click(function () {
        hub.invoke('ShowWeek');
    });

    $('#btnShowMonth').click(function () {
        hub.invoke('ShowMonth');
    });


})();