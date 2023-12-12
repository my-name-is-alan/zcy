<!-- 获取./imgs文件夹下的所有图片 -->
<?php
$dir = "./img1s";
$files = scandir($dir);
$files = array_diff($files, array('.', '..'));
// 并且将文件拼接为 http://localhost:8080/imgs/xxx.jpg 的形式
foreach ($files as &$file) {
  $file = "http://119.91.237.233//imgs/" . $file;
}
$files = array_values($files);
/**
 * 返回的数据格式为
 * {
 *  code: 0,
 * data: [
 * "http://localhost:8080/imgs/1.jpg",
 * "http://localhost:8080/imgs/2.jpg",
 * ...}
 * ]
 * }
 */
$files = json_encode(array(
  "code" => 0,
  "data" => $files
));
// 返回标准的json格式
header('Content-Type:application/json');
echo $files;
?>

