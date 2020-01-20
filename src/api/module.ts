import service from "@/axios";

// 接口信息
export function getDetail() {
  return service.post("http://localhost:3000/login/cellphone", {
    phone: "18513041355",
    password: "flauddnjs1"
  });
}
