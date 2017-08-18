/*
 * Made by Dennis Liu
 */
$(function () {

    $.ajax({
        type: "get",
        url: "./json/test.json",
        success: function (data) {
            var list = "";
            $.each(data, function (index, item) {
                list += "<li><a href='#'>" + item.name;
                if (item.cc) {
                    list += "<span class='fa arrow'></span>"
                }
                list += "</a>";

                var data2 = item.cc;
                if (data2) {
                    $.each(data2, function (index2, item2) {
                        if (index2 === 0) {
                            list += "<ul>";
                        }

                        list += "<li><a href='#'>" + item2.name;
                        if (item2.cc) {
                            list += "<span class='fa plus-minus'></span>"
                        }
                        list += "</a>";

                        var data3 = item2.cc;
                        if (data3) {
                            $.each(data3, function (index3, item3) {
                                if (index3 === 0) {
                                    list += "<ul>";
                                }
                                list += "<li><a href='#'>" + item3.name + "</a></li>";
                                if (index3 + 1 === data3.length) {
                                    list += "</ul>";
                                }
                            });
                        }

                        list += "</li>";


                        if (index2 + 1 === data2.length) {
                            list += "</ul>";
                        }
                    });
                }
                list += "</li>";
            });
            $("#menu").append(list);
            $('#menu').metisMenu();
        }
    });


});