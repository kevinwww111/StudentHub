export interface Student {
    userName: string;     // 帳號
    _id: number;          // 座號
    name: string;         // 姓名
    department: string;   // 院系
    grade: string;        // 年級
    class: string;        // 班級
    Email: string;        // 電子郵件
    absences?: number;    // 缺席次數 (非必填)
  }