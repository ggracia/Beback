﻿(function () {
    var clock;
    var calendarRefreshId = null;
    var connection = $.hubConnection('/beback/signalr', {useDefaultPath: false}),
        hub = connection.createHubProxy('serverHub');

    //var connection = $.hubConnection(),
    //    hub = connection.createHubProxy('serverHub');

    connection.start()
        .done(function () { console.log("Connected to hub."); })
        .fail(function () { console.log("failed to connect to hub."); });
        

    hub.on('StartTimer', function (milliseconds) {
        $("#clockWrapper").removeClass("hide");
        startTimer(milliseconds, true);
    });

    hub.on('ShowWeek', function (milliseconds) {
        if (calendarRefreshId != null) {
            stopRefresh();
        }
        $('#pageSubtitle').html('<iframe id="calendar" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=ggracia%40email.arizona.edu&amp;color=%232952A3&amp;src=agr456%40email.arizona.edu&amp;color=%238D6F47&amp;src=ctcantrell%40email.arizona.edu&amp;color=%230F4B38&amp;src=gallucci%40email.arizona.edu&amp;color=%2323164E&amp;src=jfragoso%40email.arizona.edu&amp;color=%23B1440E&amp;src=email.arizona.edu_susf9db0kel18oetpuje81h1jk%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FPhoenix" style="border-width:0; margin-top:-55px;" width="100%" height="560" frameborder="0" scrolling="no"></iframe>');
        calendarRefreshId = setInterval(reloadIFrame, 60000);
    });

    reloadIFrame = function() {
        $('#calendar').attr('src', function (i, val) { return val; });
    }

    stopRefresh = function () {
        clearInterval(calendarRefreshId);
    }


    hub.on('ShowMonth', function (milliseconds) {
        if (calendarRefreshId != null) {
            stopRefresh();
        }
        $('#pageSubtitle').html('<iframe id="calendar" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=ggracia%40email.arizona.edu&amp;color=%232952A3&amp;src=agr456%40email.arizona.edu&amp;color=%238D6F47&amp;src=ctcantrell%40email.arizona.edu&amp;color=%230F4B38&amp;src=gallucci%40email.arizona.edu&amp;color=%2323164E&amp;src=jfragoso%40email.arizona.edu&amp;color=%23B1440E&amp;src=email.arizona.edu_susf9db0kel18oetpuje81h1jk%40group.calendar.google.com&amp;color=%23B1440E&amp;ctz=America%2FPhoenix" style="border-width:0; margin-top:-55px;" width="100%" height="500" frameborder="0" scrolling="no"></iframe>');
        calendarRefreshId = window.setInterval(reloadIFrame, 60000);
    });

    hub.on('PageReload', function () {
        location = location;
    });

    hub.on('ChangeTitle', function (txt) {
        $('#pageTitle').html(txt);
    });

    hub.on('ChangeSubtitle', function (txt) {
        $('#pageSubtitle').html(txt);
    });

    hub.on('ChangeMessage', function (txt) {
        $('#message').html(txt);
    });

    blackOutScreen = function (opacity, milliseconds, height, width) {
        $('#overlay').animate({
            opacity: opacity,
            height: height,
            width: width
        }, milliseconds, function () {
            // Animation complete.
        });
    };

    startTimer = function (milliseconds, autoStart) {
        $('.clock').FlipClock(milliseconds, {
            clockFace: 'HourCounter',
            countdown: true,
            autoStart: autoStart
        });
    };

    calendarRefreshId = window.setInterval(reloadIFrame, 60000);

    //startTimer(3600, false);


})();