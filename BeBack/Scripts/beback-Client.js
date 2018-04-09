(function () {
    var clock;
    var calendarRefreshId = null;

    
    
    //This line is uncommented when publishing the project
    var connection = $.hubConnection('/beback/signalr', {useDefaultPath: false}),
        hub = connection.createHubProxy('serverHub');

    //This line is uncommented when developing localy
    //var connection = $.hubConnection(),
    //    hub = connection.createHubProxy('serverHub');

    connection.start()
        .done(function () { console.log("Connected to hub."); })
        .fail(function () { console.log("failed to connect to hub."); });
        

    hub.on('StartTimer', function (seconds, title, subtitle, message) {
        $("#clockWrapper").removeClass("hide");
        $('#pageTitle').html(title);
        $('#pageSubtitle').html(subtitle);
        $('#message').html(message);
        startTimer(seconds, true);
    });

    hub.on('ShowWeek', function (milliseconds) {
        if (calendarRefreshId != null) {
            stopRefresh();
        }
        $('#pageTitle').html("");
        $('#pageSubtitle').html('<iframe id="calendar" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;mode=WEEK&amp;height=450&amp;wkst=1&amp;bgcolor=%23e6e3d9&amp;src=ggracia%40email.arizona.edu&amp;color=%23B1440E&amp;src=agr456%40email.arizona.edu&amp;color=%232952A3&amp;src=ctcantrell%40email.arizona.edu&amp;color=%2342104A&amp;src=gallucci%40email.arizona.edu&amp;color=%23060D5E&amp;src=jfragoso%40email.arizona.edu&amp;color=%232F6213&amp;src=email.arizona.edu_susf9db0kel18oetpuje81h1jk%40group.calendar.google.com&amp;color=%234E5D6C&amp;ctz=America%2FPhoenix" style="border-width:0; margin-top:-55px;" width="100%" height="450" frameborder="0" scrolling="no"></iframe>');
        $('#message').html("");
        calendarRefreshId = setInterval(reloadIFrame, 60000);
        hideClock();
    });


    hub.on('ShowMonth', function (milliseconds) {
        if (calendarRefreshId != null) {
            stopRefresh();
        }
        $('#pageTitle').html('');
        $('#pageSubtitle').html('<iframe id="calendar" src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=450&amp;wkst=1&amp;bgcolor=%23e6e3d9&amp;src=ggracia%40email.arizona.edu&amp;color=%23B1440E&amp;src=agr456%40email.arizona.edu&amp;color=%232952A3&amp;src=ctcantrell%40email.arizona.edu&amp;color=%2342104A&amp;src=gallucci%40email.arizona.edu&amp;color=%23060D5E&amp;src=jfragoso%40email.arizona.edu&amp;color=%232F6213&amp;src=email.arizona.edu_susf9db0kel18oetpuje81h1jk%40group.calendar.google.com&amp;color=%234E5D6C&amp;ctz=America%2FPhoenix" style="border-width:0; margin-top:-55px;" width="100%" height="450" frameborder="0" scrolling="no"></iframe>');
        $('#message').html('');
        calendarRefreshId = window.setInterval(reloadIFrame, 60000);
        hideClock();
    });

    hub.on('PageReload', function () {
        location = location;
    });

    hub.on('ChangeTitle', function (txt) {
        $('#pageTitle').html(txt);
    });

    hub.on('ChangeText', function (title, subtitle, message) {
        $('#pageTitle').html(title);
        $('#pageSubtitle').html(subtitle);
        $('#message').html(message);
    });

    hub.on('ChangeSubtitle', function (txt) {
        $('#pageSubtitle').html(txt);
    });

    hub.on('ChangeMessage', function (txt) {
        $('#message').html(txt);
    });

    function reloadIFrame() {
        $('#calendar').attr('src', function (i, val) { return val; });
    }

    function stopRefresh() {
        clearInterval(calendarRefreshId);
    }

    function blackOutScreen(opacity, milliseconds, height, width) {
        $('#overlay').animate({
            opacity: opacity,
            height: height,
            width: width
        }, milliseconds, function () {
            // Animation complete.
        });
    };

    function startTimer(seconds, autoStart) {
        if ($("#clockWrapper").hasClass("invisible")) $("#clockWrapper").removeClass("invisible");
        if (!$("#clockWrapper").hasClass("visible")) $("#clockWrapper").addClass("visible");
        $('.clock').FlipClock(seconds, {
            clockFace: 'HourCounter',
            countdown: true,
            autoStart: autoStart
        });
    };

    function hideClock() {
        $('.clock').html('');
    };

    $(".presence").focus(function () {
        o.html("focus");
    });

    $(".presence").click(function () {
        
        if ($(this).hasClass("btn-success")) {
            $(this).removeClass("btn-success").addClass("btn-warning");
            return;
        }
        if ($(this).hasClass("btn-warning")) {
            $(this).removeClass("btn-warning").addClass("btn-info");
            return;
        }
        if ($(this).hasClass("btn-info")) {
            $(this).removeClass("btn-info").addClass("btn-danger");
            return;
        }
        if ($(this).hasClass("btn-danger")) {
            $(this).removeClass("btn-danger").addClass("btn-success");
            return;
        }        
    });

    $(".presence").bind("tap", tapHandler);

    function tapHandler(event) {
        var c = event.target;
        
        o.html("tap");


        if (c.hasClass("btn-success")) {
            c.removeClass("btn-success").addClass("btn-warning");
            return;
        }
        if (c.hasClass("btn-warning")) {
            c.removeClass("btn-warning").addClass("btn-danger");
            return;
        }
        if (c.hasClass("btn-danger")) {
            c.removeClass("btn-danger").addClass("btn-success");
            return;
        }                
    }


    calendarRefreshId = window.setInterval(reloadIFrame, 60000);


    //startTimer(3600, false);


})();