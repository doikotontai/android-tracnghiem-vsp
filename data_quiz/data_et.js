// Dữ liệu cho môn ET
// Biến này PHẢI tên là data_et để tệp index có thể đọc được
const data_et = {
  name: "ET", // Tên sẽ hiển thị ra
  questions: [
    {
      "question": "1) Mật độ từ thông trong vật liệu từ tính thường được biểu thị bằng:",
      "options": [
        "Biểu tượng µ",
        "Biểu tượng σ",
        "Chữ cái B",
        "Chữ cái H"
      ],
      "answer": [2]
    },
    {
      "question": "2) Từ hóa của cuộn dây thử nghiệm dòng điện xoáy thường được biểu thị bằng:",
      "options": [
        "Biểu tượng µ",
        "Biểu tượng σ",
        "Chữ cái B",
        "Chữ cái H"
      ],
      "answer": [3]
    },
    {
      "question": "3) Khi một vật liệu từ tính được đặt trong vùng có lực từ hóa (H), từ trường (B) được tạo ra trong vật liệu:",
      "options": [
        "Cảm ứng từ",
        "Dẫn điện",
        "Truyền nhiệt",
        "Truyền đô men từ tính"
      ],
      "answer": [0]
    },
    {
      "question": "4) Định nghĩa được dùng để xác định giá trị H cần thiết để giảm từ dư của vật về 0 là:",
      "options": [
        "Lực cưỡng bức",
        "Lực từ hóa",
        "Sức phản điện động",
        "Giá trị trùng lặp"
      ],
      "answer": [0]
    },
    {
      "question": "5) Phương pháp được sử dụng để tạo ra dòng điện xoay chiều trong 1 mẫu vật bằng cách đưa 1 cuộn dây tới gần để so sánh với 1 phản ứng của 1:",
      "options": [
        "Máy biến thế",
        "Cái tụ điện",
        "Pin lưu trữ",
        "Máy phát điện"
      ],
      "answer": [0]
    },
    {
      "question": "6) Một ký tự thông dụng để chỉ khả năng từ thẩm là:",
      "options": [
        "µ",
        "α",
        "XL",
        "R"
      ],
      "answer": [0]
    },
    {
      "question": "7) Tần số nào dưới đây sẽ cung cấp độ thấm điện xoáy tốt nhất cho nhôm?",
      "options": [
        "1 kHz",
        "10 kHz",
        "3 kHz",
        "300 Hz"
      ],
      "answer": [3]
    },
    {
      "question": "8) Thuật ngữ dùng để xác định đơn vị mật độ từ thông là:",
      "options": [
        "Maxwell",
        "Gauss",
        "Ohm",
        "Mho"
      ],
      "answer": [1]
    },
    {
      "question": "9) Tỷ lệ giữa phản hồi hoặc biên độ từ các tín hiệu quan tâm với phản hồi hoặc biên độ của các chỉ thị không chứa thông tin hữu ích cho thử nghiệm đang được tiến hành được gọi là:",
      "options": [
        "Tỷ lệ Poisson",
        "Tỷ lệ tín hiệu trên nhiễu",
        "Tỷ lệ độ dẫn điện trên độ thấm",
        "Tỷ lệ điện kháng trên điện trở"
      ],
      "answer": [1]
    },
    {
      "question": "10) IACS là thuật ngữ viết tắt của:",
      "options": [
        "Induced Alternating Current System",
        "Inductively-Activated Comparison System",
        "Internal Applied Current System",
        "International Annealed Copper Standard"
      ],
      "answer": [3]
    },
    {
      "question": "11) Bộ phận nào sau đây không phải là bộ phận cơ bản của thiết bị dòng điện xoáy?",
      "options": [
        "Amplifier / bộ khuếch đại",
        "Coil / Cuộn dây",
        "liquid couplant / Nước tiếp âm",
        "detector / Máy dò"
      ],
      "answer": [2]
    },
    {
      "question": "12) Độ dẫn điện của vật liệu có thể thay đổi bằng cách thay đổi:",
      "options": [
        "Mẫu hợp kim",
        "Xử lý nhiệt của mẫu",
        "Độ của mẫu",
        "Tất cả điều trên"
      ],
      "answer": [3]
    },
    {
      "question": "13) Các đặc điểm nào sau có thể sử dụng làm lợi thế của phương pháp ET:",
      "options": [
        "Có thể sử dụng mà không cần tiếp xúc vật lý với vật kiểm tra",
        "Không cần tiếp âm",
        "Có thể kiểm trả với tốc độ cao",
        "Cả 3 đáp án ở trên"
      ],
      "answer": [3]
    },
    {
      "question": "14) Lift-off được sử dụng trong:",
      "options": [
        "Đo sự thay đổi độ từ thẩm",
        "Đo sự thay đổi đọ dẫn điện",
        "Đo độ dày của lớp phủ không dẫn điện",
        "Xác định tần suất kiểm tra thích hợp"
      ],
      "answer": [2]
    },
    {
      "question": "15) Tần số thực tế sử dụng trong bất kỳ kiểm tra dòng điện xoáy nên chọn căn cứ vào:",
      "options": [
        "Độ dày của vật liệu",
        "Khả năng thấm sâu",
        "Mức độ nhạy cảm và yêu cầu về độ phân giải.",
        "Mục đích của việc kiểm tra.",
        "Tất cả những điều trên."
      ],
      "answer": [4]
    },
    {
      "question": "16) Thuật ngữ dùng để định nghĩa vật liệu có độ thẩm thấu nhỏ hơn độ thẩm thấu của chân không là:",
      "options": [
        "Nghịch từ",
        "Sắt từ",
        "Thuận từ",
        "Từ tính"
      ],
      "answer": [0]
    },
    {
      "question": "17) Khi kiểm tra vật liệu kim loại đen, một phần nhỏ nhưng có thể phát hiện được của từ thông trong vật liệu sẽ đi ra ngoài kim loại khi gặp phải sự gián đoạn bề mặt. Thông lượng này được gọi là:",
      "options": [
        "Thông lượng không khí",
        "Thông lượng rò rỉ",
        "Từ thông cảm ứng",
        "Không có cái nào ở trên"
      ],
      "answer": [1]
    },
    {
      "question": "18) Giá trị độ dẫn điện của một kim loại là một hàm của:",
      "options": [
        "Xử lý nhiệt cho kim loại",
        "Gia công nguội thực hiện trên kim loại",
        "Quá trình lão hóa được sử dụng trên kim loại",
        "Tất cả những điều trên"
      ],
      "answer": [3]
    },
    {
      "question": "19) Khi độ thẩm thấu của vật liệu giảm, độ sâu thẩm thấu sẽ ảnh hưởng như thế nào sau đây?",
      "options": [
        "Tăng",
        "Giảm",
        "Không đổi",
        "Tăng độ dẫn điện"
      ],
      "answer": [0]
    },
    {
      "question": "20) Khi đưa cuộn sơ cấp lại gần vật dẫn điện thì điều gì ảnh hưởng trong từ trường thứ cấp?",
      "options": [
        "Nó sẽ ngược chiều với từ trường sơ cấp",
        "Nó sẽ ngược chiều với điện trường sơ cấp",
        "Nó sẽ nhỏ hơn nhưng theo cùng một hướng",
        "Nó sẽ lớn hơn nhưng theo cùng một"
      ],
      "answer": [0]
    },
    {
      "question": "21) Khi một dòng điện chạy qua một sợi dây, cái gì liên quan đến nó?",
      "options": [
        "Dòng điện chạy ngược chiều",
        "Hiệu ứng làm mát",
        "Từ trường vuông góc với dòng điện",
        "Từ trường song song với dòng điện"
      ],
      "answer": [2]
    },
    {
      "question": "22) Ký hiệu của dòng điện?",
      "options": [
        "I",
        "C",
        "L",
        "F"
      ],
      "answer": [0]
    },
    {
      "question": "23) Phương pháp hoặc kỹ thuật NDT nào dưới đây không thể sử dụng để ước tính độ sâu vết nứt?",
      "options": [
        "Alternating current potential drop (ACPD)",
        "Time-of-flight ultrasonic (TOFD)",
        "Alternating current field measurement (ACFM)",
        "Dye penetrant inspection (PT)"
      ],
      "answer": [3]
    },
    {
      "question": "24) Thuật ngữ nào được sử dụng để mô tả sự thay đổi trong màn hình khi khoảng cách từ bề mặt được kiểm tra đến cuộn dây thay đổi?",
      "options": [
        "Thay đổi pha",
        "Hệ số lấp đầy",
        "Hiệu ứng cạnh",
        "Nhấc lên (lift-off)"
      ],
      "answer": [3]
    },
    {
      "question": "25) ET không được sử dụng để kiểm tra:",
      "options": [
        "Thép",
        "Nhôm",
        "Plastic",
        "Đồng"
      ],
      "answer": [2]
    },
    {
      "question": "26) Điều nào sau đây là cần thiết để cho phép dòng điện trong cuộn dây tạo ra dòng điện thứ cấp trong vật liệu liền kề?",
      "options": [
        "Dòng điện phải không đổi",
        "Khoảng cách phải thay đổi",
        "Vật liệu phải có từ tính",
        "Dòng điện phải thay đổi"
      ],
      "answer": [3]
    },
    {
      "question": "27) V = IxR đại diện cho",
      "options": [
        "Quy tắc Bàn tay phải Flemming",
        "Định luật Ohms",
        "Điện trở toàn phần của một dây dẫn",
        "Một phép đo từ dư"
      ],
      "answer": [1]
    },
    {
      "question": "28) Tần số kiểm tra nào sau đây sẽ tạo ra dòng điện xoáy có độ xuyên sâu lớn nhất?",
      "options": [
        "100 Hz",
        "1 kHz",
        "1 MHz",
        "10 MHz"
      ],
      "answer": [0]
    },
    {
      "question": "29) Sự cản trở của cuộn dây thử nghiệm dòng điện xoáy với dòng điện xoay chiều được gọi là:",
      "options": [
        "Điện trở",
        "Phản ứng quy nạp",
        "Trở kháng",
        "Phản ứng điện dung"
      ],
      "answer": [2]
    },
    {
      "question": "30) Việc tăng trở kháng của cuộn dây kiểm tra dòng điện xoáy sẽ:",
      "options": [
        "Tăng dòng điện chạy qua cuộn dây",
        "Giảm dòng điện chạy qua cuộn dây",
        "Không ảnh hưởng đến dòng điện trong cuộn dây",
        "Giảm điện thế đặt vào cuộn dây"
      ],
      "answer": [1]
    },
    {
      "question": "31) Các cuộn dây thử nghiệm dòng điện xoáy được quấn thành cuộn rộng thường được sử dụng để phát hiện:",
      "options": [
        "Đỗ xốp",
        "Xỉ nhỏ",
        "Thay đổi độ dẫn điện",
        "Rỗ"
      ],
      "answer": [2]
    },
    {
      "question": "32) Phương pháp nào đưới đây có thể được sử dụng để cải thiện tỉ lệ tính hiệu / nhiễu trong 1 hệ thống kiểm tra điện xoáy:",
      "options": [
        "Bộ lọc",
        "Sự đúng pha",
        "Sự tích hợp",
        "Tất cả ý trên"
      ],
      "answer": [3]
    },
    {
      "question": "33) Khi từ trường H quanh vật liệu tăng lên sau đó giảm về 0, cảm ứng từ B trong vật không về lại 0, định nghĩa dùng để xác định giá trị B khi H về 0 là:",
      "options": [
        "Lực cưỡng bức",
        "Từ dư",
        "Giá trị bão hòa",
        "Tổn hao do từ trễ"
      ],
      "answer": [1]
    },
    {
      "question": "34) Ký hiệu thường dùng để ký hiệu trở kháng là:",
      "options": [
        "Z",
        "Xj",
        "R",
        "Xc"
      ],
      "answer": [0]
    },
    {
      "question": "35) Tỉ lệ của mật độ từ thông của vật liệu để kiểm tra lực từ hóa cuộn dây, B/H có thể được sử dụng để xác định trong vật liệu là:",
      "options": [
        "Sự dẫn điện.",
        "Điện trở",
        "Nâng lên.",
        "Từ thẩm."
      ],
      "answer": [3]
    },
    {
      "question": "36) Khi dòng điện trong cuộn dây đổi hướng",
      "options": [
        "Hướng của dòng điện xoáy trong vật kiểm tương đồng.",
        "Dòng điện xoáy trong vật kiểm sẽ thay đổi pha 45 độ.",
        "Của dòng điện xoáy trong vật kiểm cũng thay đổi.",
        "Dòng điện xoáy trong vật kiểm tương đồng."
      ],
      "answer": [2]
    },
    {
      "question": "37) Khi một thanh được đặt trong cuộn dây. Mật độ của dòng điện xoáy sẽ lớn nhất tại.",
      "options": [
        "Bề mặt.",
        "Tại trung tâm",
        "Giữa bề mặt và trung tâm",
        "Không phải điều nào ở trên."
      ],
      "answer": [0]
    },
    {
      "question": "38) Thuật ngữ hệ số lắp đầy (fill factor) áp dụng cho:",
      "options": [
        "Bề mặt cuộn dây.",
        "Cáp đồng trục",
        "Một cuộn dây bao quanh.",
        "Tất cả những điều trên"
      ],
      "answer": [2]
    },
    {
      "question": "39) Trong thử nghiệm dòng điện xoáy, mẫu thử được nối với cuộn dây thử nghiệm bằng:",
      "options": [
        "Khớp nối lõi",
        "Bão hòa từ tính",
        "Từ trường của cuộn dây",
        "Miền từ tính"
      ],
      "answer": [2]
    },
    {
      "question": "40) Loại nào sau đây không phải bất liên tục trong quá trình sử dụng",
      "options": [
        "Nứt rèn",
        "Nứt mỏi",
        "Nứt do ăn mòn ứng suất",
        "Nứt ăn mòn tinh giới hạt"
      ],
      "answer": [0]
    },
    {
      "question": "41) Mẫu thử dùng làm cơ sở hiệu chuẩn thiết bị thử nghiệm hoặc để so sánh khi đánh giá kết quả thử nghiệm được gọi là:",
      "options": [
        "Cân bằng",
        "Bộ chuyển pha",
        "Tiêu chuẩn tham chiếu",
        "Bộ lọc cao"
      ],
      "answer": [2]
    },
    {
      "question": "42) Điều nào sau đây được coi như là một bất liên tục?",
      "options": [
        "Nứt",
        "Thay đổi tiết diện",
        "Lỗ khoan",
        "Tất cả câu trên."
      ],
      "answer": [3]
    },
    {
      "question": "43) Nếu tần số đặc trưng fg của vật liệu là 125Hz, tần số kiểm tra yêu cầu để tỷ số f/fg bằng 100 sẽ là:",
      "options": [
        "1,25 Hz",
        "12,5 Hz",
        "1,25 kHz",
        "12,5 kHz"
      ],
      "answer": [3]
    },
    {
      "question": "44) Hệ số điền đầy (n = (a/c)2) khi 1 thanh đường kính 12.7mm đưa vào một cuộn dây đường kính 25.4mm là:",
      "options": [
        "0.5 (50%)",
        "0.75 (75%)",
        "1.0 (100%)",
        "0.25 (25%)"
      ],
      "answer": [3]
    },
    {
      "question": "45) Mục đích chính của đầu dò dòng xoáy có lò xo đẩy là để:",
      "options": [
        "Giảm thiểu sự thay đổi liftoff",
        "Giảm mệt mỏi cho kỹ thuật viên",
        "Giảm thiểu mài mòn đầu dò",
        "Loại bỏ hiệu ứng cạnh",
        "Tất cả những điều trên"
      ],
      "answer": [0, 4]
    },
    {
      "question": "46) Trong kiểm tra dòng điện xoáy, tốc độ quét kiểm tra tối đa theo lý thuyết được xác định bởi:",
      "options": [
        "Tiêu chuẩn",
        "Tần số kiểm tra",
        "Truyền động",
        "Trở kháng của cuộn dây"
      ],
      "answer": [1]
    },
    {
      "question": "47) Tần số thực tế sử dụng trong bất kỳ kiểm tra dòng điện xoáy nên chọn căn cứ vào.",
      "options": [
        "Độ dày của vật liệu",
        "Khả năng thấm sâu",
        "Mức độ nhạy cảm và yêu cầu về độ phân giải.",
        "Mục đích của việc kiểm tra.",
        "Tất cả những điều trên."
      ],
      "answer": [4]
    },
    {
      "question": "48) Tần số hoạt động 100kHz sẽ có độ xuyên thấu sâu nhất trong:",
      "options": [
        "Titan",
        "Đồng",
        "Thép không gỉ",
        "Nhôm"
      ],
      "answer": [2]
    },
    {
      "question": "49) Phương pháp NDT nào có thể dùng để phân loại hợp kim nhôm?",
      "options": [
        "UT",
        "MT",
        "RT",
        "ET"
      ],
      "answer": [3]
    },
    {
      "question": "50) Điều kiện nào sau đây có thể khó khăn nhất khi kiểm tra dòng xoáy với cuộn dây ngoài?",
      "options": [
        "Một sự thay đổi 15% đường kính",
        "Một vết nứt bề mặt có độ sâu đến 34% đường kính",
        "Một ngậm sỉ nhỏ tại tâm của thanh dẫn",
        "Một sự thay đổi 25% về độ dẫn điện"
      ],
      "answer": [2]
    },
    {
      "question": "51) Tần số giới hạn (fg) được tính dựa trên tất cả các tham số về vật kiểm tra sau đây, ngoại trừ:",
      "options": [
        "Metal hardness – Độ cứng",
        "Permeability – Độ từ thẩm",
        "Conductivity – Độ dẫn điện",
        "Diameter of the test object – Đường kính của vật."
      ],
      "answer": []
    },
    {
      "question": "52) Khi tín hiệu dòng xoáy bị ảnh hưởng bởi rất nhiều yếu tố khác, vấn đề quan trọng khi cài đặt thiết bị là:",
      "options": [
        "Chất tiếp âm",
        "Bột huỳnh quang",
        "Mẫu chuẩn đối chứng",
        "Chất làm sạch không mài mòn"
      ],
      "answer": [2]
    },
    {
      "question": "53) Yếu tố nào của vật kiểm tra nên tương đương với mẫu chuẩn?",
      "options": [
        "Độ dày",
        "Hình học",
        "Độ dẫn điện",
        "Tất cả đều đúng"
      ],
      "answer": [3]
    },
    {
      "question": "54) Chậm pha:",
      "options": [
        "Tăng cùng với độ sâu khuyết tật",
        "Giảm cùng với độ sâu khuyết tật",
        "Bằng góc pha",
        "Bằng nhau khi phân biệt giữa liftoff và tín hiệu khuyết tật trên mặt phẳng tổng trở."
      ],
      "answer": [0]
    },
    {
      "question": "55) Mạch kiểm tra dòng xoáy sẽ có:",
      "options": [
        "Điện trở",
        "Cảm kháng",
        "Một lượng dung kháng nhỏ",
        "Tất cả đều đúng"
      ],
      "answer": [3]
    },
    {
      "question": "56) Khi khó khăn trong việc dùy trì khoảng cách liftoff, loại đầu đò nào nên được dùng:",
      "options": [
        "A absolute probe / Đầu dò kiểu tuyệt đối",
        "A differential probe / Đầu dò kiểu vi sai",
        "A reflection probe / Đầu dò kiểu phản xạ",
        "Both b. and c. / Cả b. và c."
      ],
      "answer": [1]
    },
    {
      "question": "57) Quy trình kiểm tra dòng điện xoáy là tài liệu số:",
      "options": [
        "P6/QA/19",
        "P6/QA/38",
        "P6/QA/33",
        "P6/QA/20"
      ],
      "answer": [1]
    },
    {
      "question": "58) Quy trình kiểm tra dòng xoáy số P6/QA/38 áp dụng cho vật liệu nào:",
      "options": [
        "Vật liệu sắt từ",
        "Vật liệu phi sắt từ",
        "Vật liệu có lớp sơn phủ",
        "Cả 3 đáp án trên"
      ],
      "answer": [3]
    },
    {
      "question": "59) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, đánh giá và báo cáo kết quả bởi kỹ thuật viên ET phải:",
      "options": [
        "Đã qua đào tạo và cấp chứng chỉ cấp II hoặc cấp III theo qui trình OCD-PR-16",
        "Có chứng chỉ PCN, CSWIP hoặc các tiêu chuẩn tương đương",
        "Nhân sự NDT phải được đào tạo và có đủ kinh nghiệm để cài đặt, ghi nhận và giải đoán dữ liệu",
        "Cả 3 đáp án trên."
      ],
      "answer": [3]
    },
    {
      "question": "60) Sự phân bố dòng điện xoáy theo chiều sâu vật liệu tuân theo các quy tắc vật lý nào (trong quy trình):",
      "options": [
        "Mật độ dòng điện giảm mạnh khi độ sâu tăng dần",
        "Dòng kích tần số cao, mật độ dòng giảm theo hàm số mũ của độ sâu",
        "Cả 2 đều đúng",
        "Cả 2 đều sai"
      ],
      "answer": [2]
    },
    {
      "question": "61) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, Các thông số cơ bản ảnh hưởng đến độ lớn đo được bao gồm:",
      "options": [
        "Độ dẫn điện của vật liệu, độ từ thẩm của vật liệu, kích thước và hình dạng của vật kiểm tra, dạng hình học tại tiếp xúc giữa đầu dò và vật kiểm tra",
        "Độ dẫn điện của vật liệu, độ từ thẩm của vật liệu, kích thước và hình dạng của vật kiểm tra",
        "Độ dẫn điện của vật liệu, độ từ thẩm của vật liệu, dạng hình học tại tiếp xúc giữa đầu dò và vật kiểm tra",
        "Độ dẫn điện của vật liệu, kích thước và hình dạng của vật kiểm tra, dạng hình học tại tiếp xúc giữa đầu dò và vật kiểm tra"
      ],
      "answer": [0]
    },
    {
      "question": "62) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, Các đặc điểm sau có thể sử dụng làm lợi thế của phương pháp ET:",
      "options": [
        "Có thể được sử dụng mà không cần tiếp xúc vật lý với vật kiểm tra, không cần tiếp âm có thể kiểm tra",
        "Có thể được sử dụng mà không cần tiếp xúc vật lý với vật kiểm tra, cần tiếp âm, có thể kiểm tra với tốc độ cao",
        "Có thể được sử dụng mà không cần tiếp xúc vật lý với vật kiểm tra, không cần mài sơn.",
        "Có thể được sử dụng mà không cần tiếp xúc vật lý với vật kiểm tra, không cần tiếp âm, có thể kiểm tra với tốc độ cao"
      ],
      "answer": [3]
    },
    {
      "question": "63) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, thiết bị kiểm tra vòng xoáy:",
      "options": [
        "Hoạt động trong giải tần từ 1 KHz đến 1 MHz",
        "Độ nhạy khi kiểm tra vết khấc nhân tạo sâu 1 mm trong mẫu hiệu chuẩn qua lớp phủ (bằng với độ dày lớp phủ trên vật kiểm) phải đạt được đến mức toàn màn hình sau quá trình cân bằng, bù trừ lift-off và điều chỉnh độ nhạy + pha.",
        "Màn hình hiển thị phải có tính năng đóng băng dữ liệu trên màn hình cho đến khi người vận hành cài đặt lại, Điều khiển pha có thể xoay được 360° với các bước không quá 10°",
        "Tất cả đều đúng"
      ],
      "answer": [3]
    },
    {
      "question": "64) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, tần số hoạt động của thiết bị kiểm tra dòng xoáy trong giải:",
      "options": [
        "1KHz đến 1MHz",
        "10KHz đến 1MHz",
        "10KHz đến 10MHz",
        "1MHz đến 10MHz"
      ],
      "answer": [0]
    },
    {
      "question": "65) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, đầu dò kiểm tra mối hàn:",
      "options": [
        "Đầu dò có thể là dạng Vi sai (differential) hoặc Tuyệt đối (Absolute)",
        "Đường kính của các đầu dò được chọn liên quan đến hình dạng của các vật kiểm tra",
        "Đầu dò phải hoạt động ở tần số đã chọn trong phạm vi từ 100kHz đến 1 MHz theo quy định của nhà sản xuất",
        "Cả 3 đáp án trên"
      ],
      "answer": [3]
    },
    {
      "question": "66) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, mẫu hiệu chuẩn là:",
      "options": [
        "Sử dụng mẫu hiệu chuẩn cùng loại với vật liệu kiểm tra",
        "Mẫu có các vết khấc EDM có độ sâu 0,5mm, 1,0mm và 2,0mm, trừ khi có thỏa thuận khác giữa các bên.",
        "Dung sai của độ sâu vết khấc là ±0,1 mm. Chiều rộng của các vết khấc là <0,2mm.",
        "Tất cả những điều trên"
      ],
      "answer": [3]
    },
    {
      "question": "67) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, lớp nhựa không dẫn điện:",
      "options": [
        "Phải sử dụng các lớp mềm không dẫn điện có độ dày đã biết để mô phỏng lớp phủ thực tế trên mẫu hiệu chuẩn.",
        "Lớp phủ không dẫn điện phải là bội số của độ dày 0,5mm",
        "Là lớp nhựa có sơn mỏng",
        "Cả a và b."
      ],
      "answer": [3]
    },
    {
      "question": "68) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, Tần suất hiệu chuẩn thiết bị thông thường:",
      "options": [
        "1 năm 1 lần",
        "6 tháng 1 lần",
        "2 năm 1 lần",
        "Không cần hiệu chuẩn."
      ],
      "answer": [0]
    },
    {
      "question": "69) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, Độ lợi được điều chỉnh:",
      "options": [
        "Từ 0 đến 60 dB theo các bước 0,1 db",
        "Từ 0 đến 70 dB theo các bước 0,1 db",
        "Từ 0 đến 90 dB theo các bước 0,1 db",
        "Từ 0 đến 90 dB theo các bước 0,2 db"
      ],
      "answer": [2]
    },
    {
      "question": "70) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, điểm cân bằng (trên mặt phẳng tổng trở) thường được chọn như thế nào:",
      "options": [
        "Giữa màn hình",
        "Góc trái màn hình",
        "Góc phải màn hình",
        "không cần cài đặt thông số này"
      ],
      "answer": [0]
    },
    {
      "question": "71) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, hiệu chuẩn đo độ dày lớp phủ sau khi đặt đầu dò tuyệt đối được đặt trên vật liệu hiệu chuẩn (không có lớp cách điện) điều chỉnh mức tăng ngang cho đến khi tín hiệu đạt 80% sẽ làm gì tiếp theo?",
      "options": [
        "Đưa dấu chấm trở lại vị trí ban đầu và Lặp lại quy trình trên bằng cách đặt một lớp phủ không dẫn điện (0,5mm) trên mẫu hiệu chuẩn và lặp lại tương tự bằng cách tăng số lớp cách điện (tối đa 4 lớp)",
        "Lưu dữ liệu và đo lớp sơn",
        "Tiến hành đo lớp sơn",
        "không cần cài đặt thông số này"
      ],
      "answer": [0]
    },
    {
      "question": "72) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, việc hiệu chuẩn độ nhạy phải được thực hiện định kỳ tối thiểu như thế nào:",
      "options": [
        "Khi bắt đầu kiểm tra",
        "Khi kết thúc kiểm tra",
        "Khi thay đổi điều kiện làm việc",
        "Tất cả những điều trên"
      ],
      "answer": [3]
    },
    {
      "question": "73) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, khi hiệu chuẩn độ nhạy với vạch sâu 2 mm sẽ cho biên độ xấp xỉ bao nhiêu",
      "options": [
        "100%",
        "90%",
        "80%",
        "Ghi lại biên độ tín hiệu"
      ],
      "answer": [3]
    },
    {
      "question": "74) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, việc cài đặt độ nhạy cho kiểm tra mối hàn thép carbon phải:",
      "options": [
        "Tín hiệu từ vết khấc 1 mm có biên độ đạt 80% chiều cao màn hình.",
        "Tín hiệu từ vết khấc 1 mm có biên độ đạt 100% chiều cao màn hình.",
        "Tín hiệu từ vết khấc 1 mm có biên độ đạt 70% chiều cao màn hình.",
        "Không câu nào đúng"
      ],
      "answer": [0]
    },
    {
      "question": "75) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, vùng quét mối hàn:",
      "options": [
        "Chỉ quét bề mặt mối hàn",
        "Chỉ quét mũ mối hàn",
        "Bề mặt mối hàn và vùng ảnh hưởng nhiệt",
        "Không cần quét vùng ảnh hưởng nhiệt"
      ],
      "answer": [2]
    },
    {
      "question": "76) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, khi quét vật liệu cần lưu ý gì:",
      "options": [
        "Đặt đầu dò gần với khu vực kiểm tra và đặt lại lift-off và cân bằng nếu cần",
        "Quét cẩn thận bề mặt của khu vực kiểm tra, sử dụng các kĩ thuật quét phù hợp với hình dạng bề mặt",
        "Gia số quét không được vượt quá 1 mm",
        "Cả 3 đáp án trên"
      ],
      "answer": [3]
    },
    {
      "question": "77) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, báo cáo kết quả sẽ không ghi nhận thông tin nào sau đây:",
      "options": [
        "Chiều dày lớp sơn phủ kiểm tra",
        "Kết quả kiểm tra",
        "Quy trình kiểm tra",
        "Tên nhận dạng thiết bị dùng kiểm tra"
      ],
      "answer": [0]
    },
    {
      "question": "78) Theo qui trình kiểm tra dòng xoáy số P6/QA/38, tiêu chí đánh giá:",
      "options": [
        "Với kết cấu AWS D1.1, bảng 8.1",
        "Với ống công nghệ ASME B31.3",
        "Với đường ống ngầm, riser API 1104",
        "Không có đáp án nào đúng"
      ],
      "answer": [0]
    }
  ]
};
