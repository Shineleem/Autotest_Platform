UI自动化测试平台
项目列表界面，修改item.html可自由添加项目
![image](https://github.com/Shineleem/Autotest_Platform/blob/master/images/item.png)
初始界面，负责脚本启动，可配置具体测试的模块
![image](https://github.com/Shineleem/Autotest_Platform/blob/master/images/index.png)
报告界面，默认生成报告时间3小时，超出3小时默认运行失败，进度条支持局部加载
![image](https://github.com/Shineleem/Autotest_Platform/blob/master/images/report.png)
用例总界面，内容支持局部加载
![image](https://github.com/Shineleem/Autotest_Platform/blob/master/images/case.png)
文件目录结构说明
![image](https://github.com/Shineleem/Autotest_Platform/blob/master/images/project.png)
********************************************************************************************************  

说明：
django2.1.8+python3.7.5+html代码只是平台部分，具体运行逻辑涉及太多懒得整理

上传的代码只是简化版本，真正运行需要综合无声大佬的多进程框架利用config.ini来实现进度条，脚本启动，报告生成，查看报告等一系列操作

********************************************************************************************************  

操作步棸：

1.Autotest_Platform\platform路径，执行startdjango.bat文件

访问网址：127.0.0.1:8000或者你本机ip:8000,已经设置局域网访问模式，局域网内其他机器访问开启服务的IP:8000即可访问

********************************************************************************************************  
