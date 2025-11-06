// Dữ liệu cho môn ACFM
// Biến này PHẢI tên là data_acfm để tệp index có thể đọc được
const data_acfm = {
  name: "ACFM", // Tên sẽ hiển thị ra
  questions: [
    {
      question: "Đây là câu hỏi mẫu 1 cho môn ACFM. Đáp án đúng là A.",
      options: [
        "Đáp án A (Đúng)",
        "Đáp án B",
        "Đáp án C",
        "Đáp án D"
      ],
      answer: [0] // Chỉ số của "Đáp án A"
    },
    {
      question: "Đây là câu hỏi mẫu 2 cho môn ACFM. Đáp án đúng là B và C.",
      options: [
        "Đáp án A",
        "Đáp án B (Đúng)",
        "Đáp án C (Đúng)",
        "Đáp án D"
      ],
      answer: [1, 2] // Chỉ số của "Đáp án B" và "Đáp án C"
    }
  ]
};