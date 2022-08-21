 // 截图权限申请
 threads.start(function () {
    var beginBtn;
    if (beginBtn = classNameContains("Button").textContains("立即开始").findOne(2000)) {
        beginBtn.click();
    }
});
sleep(1000);
if (!requestScreenCapture()) {
    alert("请求截图权限失败"); 
    exit();
}
else {
    toastLog("请求截图权限成功");
}
threads.shutDownAll();//停止所有通过threads.start()启动的子线程
