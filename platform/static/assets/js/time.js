/*页面时间统计*/
            var t = null;
            t = setTimeout(time, 1000);//开始执行
            function time() {
                clearTimeout(t);//清除定时器
                dt = new Date();
                var y = dt.getYear() + 1900;
                var mm = dt.getMonth() + 1;
                var d = dt.getDate();
                var weekday = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
                var day = dt.getDay();
                var h = dt.getHours();
                var m = dt.getMinutes();
                var s = dt.getSeconds();
                if (h < 10) {
                    h = "0" + h;
                }
                if (m < 10) {
                    m = "0" + m;
                }
                if (s < 10) {
                    s = "0" + s;
                }
                document.getElementById("time").innerHTML = y + "年" + mm + "月" + d + "日";
                document.getElementById("weekday").innerHTML = weekday[day];
                t = setTimeout(time, 1000); //设定定时器，循环执行

            }