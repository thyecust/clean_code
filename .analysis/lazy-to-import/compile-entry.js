// 编译入口：先把仍走 import.meta.require 的资源以 asset 形式嵌进产物，再进真正的入口。
// cli.js 没有 `import.meta.main` 守卫（顶层无条件执行），所以套一层不影响它。
import "./__embedded-lazy-assets.js";
import "../../cli.js";
