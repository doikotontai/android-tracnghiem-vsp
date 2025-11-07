// Dữ liệu cho môn ACFM
// Biến này PHẢI tên là data_acfm để tệp index có thể đọc được
const data_acfm = {
  name: "ACFM", // Tên sẽ hiển thị ra
  questions: [
    {
      "question": "1) Kỹ thuật ACFM được sử dụng để phát hiện loại khuyết tật nào?",
      "options": [
        "Khuyết tật bên trong vật liệu",
        "Khuyết tật bề mặt hoặc gần bề mặt",
        "Sai lệch kích thước",
        "Lỗ rỗ khí"
      ],
      "answer": [1]
    },
    {
      "question": "2) Viết tắt của ACFM là gì?",
      "options": [
        "Alternating Current Field Measurement",
        "Active Current Flow Mapping",
        "Alternating Crack Flow Method",
        "Advanced Current Frequency Mapping"
      ],
      "answer": [0]
    },
    {
      "question": "3) Quy trình ACFM áp dụng cho việc kiểm tra loại vật liệu nào?",
      "options": [
        "Chỉ thép carbon",
        "Tất cả kim loại",
        "Thép và hợp kim khác kể cả bề mặt có sơn phủ",
        "Chỉ thép không gỉ"
      ],
      "answer": [2]
    },
    {
      "question": "4) Tần số làm việc tiêu chuẩn của đầu dò ACFM là:",
      "options": [
        "50 Hz",
        "5 kHz",
        "500 Hz",
        "15 kHz"
      ],
      "answer": [1]
    },
    {
      "question": "5) Kiểm tra chức năng thiết bị (Function check) được thực hiện khi nào?",
      "options": [
        "Trước khi bắt đầu và sau khi kết thúc mỗi ca kiểm tra",
        "Chỉ khi thay đầu dò",
        "Khi khách hàng yêu cầu",
        "Khi phát hiện tín hiệu bất thường"
      ],
      "answer": [0]
    },
    {
      "question": "6) Loại đầu dò nào chỉ nên dùng khi kiểm tra các vị trí rất hạn chế?",
      "options": [
        "Đầu dò chuẩn (Standard probe)",
        "Đầu dò tiếp cận hẹp (Tight access probe)",
        "Đầu dò bút (Pencil probe)",
        "Đầu dò nhỏ (Miniature pencil probe)"
      ],
      "answer": [3]
    },
    {
      "question": "7) Tốc độ quét đầu dò khuyến cáo khi kiểm tra mối hàn là:",
      "options": [
        "5 mm/s",
        "10 mm/s",
        "20 mm/s",
        "50 mm/s"
      ],
      "answer": [1]
    },
    {
      "question": "8) Khi phát hiện tín hiệu nghi ngờ khi quét ở chân mối hàn, thao tác cần làm là:",
      "options": [
        "Dừng kiểm tra và báo cáo",
        "Quét lại vị trí đó song song với mối hàn, cách mối hàn 10-25mm",
        "Tăng tốc độ quét",
        "Thay đầu dò"
      ],
      "answer": [1]
    },
    {
      "question": "9) Phương pháp ACFM có thể phát hiện được khuyết tật qua lớp phủ không dẫn điện có chiều dày bao nhiêu?",
      "options": [
        "1 mm",
        "2 mm",
        "3 mm",
        "5 mm"
      ],
      "answer": [3]
    },
    {
      "question": "10) Từ trường Bx được hiển thị trên màn hình biểu diễn điều gì?",
      "options": [
        "Thành phần song song với bề mặt kiểm tra.",
        "Thành phần vuông góc với bề mặt kiểm tra.",
        "Thành phần vuông góc với đường di chuyển của đầu dò.",
        "Thành phần song song với đường di chuyển của đầu dò."
      ],
      "answer": [3]
    },
    {
      "question": "11) Từ trường Bz được hiển thị trên màn hình biểu diễn điều gì?",
      "options": [
        "Thành phần song song với bề mặt kiểm tra.",
        "Thành phần vuông góc với bề mặt kiểm tra.",
        "Thành phần vuông góc với đường di chuyển của đầu dò.",
        "Thành phần song song với đường di chuyển của đầu dò."
      ],
      "answer": [1]
    },
    {
      "question": "12) Tần số hoạt động của thiết bị và phần mềm ACFM phải nằm trong phạm vi nào?",
      "options": [
        "Từ 1 đến 10 kHz",
        "Từ 10 đến 50 kHz",
        "Từ 1 đến 50 kHz",
        "Cố định ở 5 kHz"
      ],
      "answer": [2]
    },
    {
      "question": "13) Mục đích chính của việc kiểm tra chức năng bằng cách quét đầu dò trên tấm kiểm tra chức năng là gì?",
      "options": [
        "Đảm bảo thiết bị được hiệu chuẩn chính xác.",
        "Đảm bảo thiết bị hoạt động chính xác và đánh giá mức độ nhiễu và tín hiệu khuyết tật tương đối.",
        "Kiểm tra độ sâu và chiều dài của vết nứt mô phỏng.",
        "Xác nhận độ nhạy của thiết bị."
      ],
      "answer": [1]
    },
    {
      "question": "14) Đầu dò tiêu chuẩn (Standard weld probes) nên được sử dụng khi nào?",
      "options": [
        "Chỉ khi kiểm tra các góc hẹp.",
        "Chỉ để kiểm tra các vùng bị mài.",
        "Cho tất cả các vị trí kiểm tra mà đầu dò có khả năng tiếp cận.",
        "Cho các kiểm tra có góc giữa thanh và thanh neo (chord-to-brace angle) nhỏ hơn 900."
      ],
      "answer": [2]
    },
    {
      "question": "15) Đầu dò bút chì (pencil probe) nên được sử dụng trong trường hợp nào?",
      "options": [
        "Cho tất cả các mối hàn có khả năng tiếp cận tốt.",
        "Chỉ để kiểm tra các vùng bị mài (ground out regions) hoặc vị trí khác mà đầu dò thường không thể tiếp cận.",
        "Để kiểm tra các khuyết tật nằm ở góc nghiêng lớn hơn 250 so với đường hàn.",
        "Khi tốc độ quét yêu cầu là 10mm/giây."
      ],
      "answer": [1]
    },
    {
      "question": "16) Đầu dò bút chì thu nhỏ (miniature pencil probes) dễ bị vấn đề gì hơn các loại đầu dò khác?",
      "options": [
        "Dễ bị hỏng hơn.",
        "Rất nhạy với sự rung lắc hay thay đổi bề mặt.",
        "Dễ bị nhiễu từ các đường hàn.",
        "Dễ bị ảnh hưởng bởi thay đổi độ dày lớp phủ hơn."
      ],
      "answer": [1]
    },
    {
      "question": "17) Điều gì xảy ra khi một dòng điện xoay chiều được cảm ứng trong vật liệu kim loại bằng kỹ thuật ACFM?",
      "options": [
        "Độ sâu thẩm thấu của điện trường cố định.",
        "Độ sâu thẩm thấu của điện trường thay đổi theo loại vật liệu và tần số điện trường.",
        "Dòng điện chỉ chạy trên bề mặt.",
        "Dòng điện chỉ chạy ở giữa vật liệu."
      ],
      "answer": [1]
    },
    {
      "question": "18) Khối kiểm tra tính năng bằng thép (function plate) thường chứa các loại khuyết tật nào để mô phỏng vết nứt mỏi?",
      "options": [
        "Các rãnh thông suốt.",
        "Các vết nứt cơ học được tạo ra.",
        "Gồm mối hàn và 2 vết khấc EDM.",
        "Các vết nứt do hàn."
      ],
      "answer": [2]
    },
    {
      "question": "19) Độ sâu và chiều dài tiêu chuẩn của một rãnh (slot) được sử dụng để kiểm tra đầu dò bút chì mini (mini pencil probes) trên mẫu chuẩn là bao nhiêu?",
      "options": [
        "20mm dài x 2mm sâu.",
        "50mm dài x 5mm sâu.",
        "50mm dài x 2mm sâu.",
        "20mm dài x 5mm sâu."
      ],
      "answer": [1]
    },
    {
      "question": "20) Độ sâu và chiều dài tiêu chuẩn của một rãnh (slot) được sử dụng để kiểm tra đầu dò bút chì micro trên mẫu chuẩn là bao nhiêu?",
      "options": [
        "20mm dài x 2mm sâu.",
        "50mm dài x 5mm sâu.",
        "50mm dài x 2mm sâu.",
        "20mm dài x 5mm sâu."
      ],
      "answer": [0]
    },
    {
      "question": "21) Khối kiểm tra chức năng nhẹ (lightweight plate) hữu ích cho việc gì?",
      "options": [
        "Kiểm tra độ nhạy của thiết bị.",
        "Kiểm tra tổng thể chức năng của đầu dò và thiết bị có hoạt động bình thường hay không.",
        "Kiểm tra độ sâu chính xác của khuyết tật.",
        "Được sử dụng khi khách hàng yêu cầu kiểm tra bằng khối đánh giá."
      ],
      "answer": [1]
    },
    {
      "question": "22) Yêu cầu làm sạch bề mặt đối với kiểm tra ACFM là gì?",
      "options": [
        "Phải làm sạch đến kim loại cơ bản.",
        "Chỉ cần làm sạch đủ để đầu dò di chuyển trơn tru và nhìn thấy các đặc điểm như vết mài hoặc đường hàn.",
        "Chỉ cần loại bỏ rêu bám, hào.",
        "Cần sử dụng phương pháp phun cát trong mọi trường hợp."
      ],
      "answer": [1]
    },
    {
      "question": "23) Trong kiểm tra ACFM, đầu dò luôn được quét dọc theo một đường như thế nào so với đường hàn?",
      "options": [
        "Vuông góc với đường hàn.",
        "Một đường chéo 450 so với đường hàn.",
        "Một đường song song với đường hàn.",
        "Dọc theo đường hàn."
      ],
      "answer": [2]
    },
    {
      "question": "24) Nếu kiểm tra được thực hiện để tìm các vết nứt mỏi (fatigue cracks) dọc theo đường hàn, các khuyết tật nằm ở góc nghiêng lớn hơn khoảng bao nhiêu so với đường hàn có thể không được phát hiện?",
      "options": [
        "10 độ",
        "25 độ",
        "45 độ",
        "90 độ"
      ],
      "answer": [1]
    },
    {
      "question": "25) Khi kiểm tra mối hàn, nên thực hiện quét tại những vị trí nào?",
      "options": [
        "Chỉ dọc theo một mối hàn.",
        "Dọc theo cả hai đường chân hàn và, nếu mũ mối hàn rộng hơn 20mm phải chia làm nhiều lần quét.",
        "Chỉ quét trên vật liệu cơ bản.",
        "Chỉ quét trên mũ hàn."
      ],
      "answer": [1]
    },
    {
      "question": "26) Nếu chỉ thị tín hiệu trên vùng kim loại cơ bản có biên độ tương tự như vùng chân mối hàn, điều gì có khả năng gây ra tín hiệu đó?",
      "options": [
        "Nứt mỏi.",
        "Nứt giữa các lớp hàn (inter bead cracking).",
        "Đường hàn nối (Seam Welds), mài bề mặt (Surface Grinding) hoặc gia công nguội (Work Hardening).",
        "Khuyết tật đâm sâu vào tấm cơ bản."
      ],
      "answer": [2]
    },
    {
      "question": "27) Điều gì xảy ra khi một khuyết tật dài bắt đầu phát triển dọc theo đường chân hàn và chệch hướng vào vật liệu cơ bản?",
      "options": [
        "Bx sẽ tăng lên đột ngột.",
        "Bz sẽ có một có cực đại hoặc cực tiểu lớn.",
        "Bx sẽ giảm đột ngột mà không có cực đại hoặc cực tiểu Bz tương ứng.",
        "Cả Bx và Bz đều có có cực đại hoặc cực tiểu."
      ],
      "answer": [2]
    },
    {
      "question": "28) Đối với các mối hàn tròn (circumferential welds) có chiều dài kiểm tra lớn hơn 400mm, mối hàn có thể được chia thành các đoạn nhỏ hơn như thế nào?",
      "options": [
        "Các đoạn không chồng lấn giữa mỗi lần quét.",
        "Các đoạn có độ dài bằng nhau.",
        "Các đoạn nhỏ hơn có sự chồng lấn giữa mỗi lần quét.",
        "Các đoạn nhỏ hơn 100mm."
      ],
      "answer": [2]
    },
    {
      "question": "29) Khi phát hiện khuyết tật trên mối hàn tròn, nó nên được quét lại chi tiết hơn như thế nào?",
      "options": [
        "Quét lại toàn bộ chu vi mối hàn với tốc độ nhanh hơn.",
        "Quét lại khu vực khuyết tật cộng thêm 30mm trước và sau mỗi đầu ở tốc độ quét chậm hơn.",
        "Quét lại chỉ khu vực khuyết tật với đầu dò bút chì.",
        "Chỉ cần ghi lại vị trí mà không cần quét lại."
      ],
      "answer": [1]
    },
    {
      "question": "30) Khi kiểm tra các khu vực bị mài (ground out areas), loại đầu dò nào là bắt buộc phải sử dụng?",
      "options": [
        "Đầu dò hàn tiêu chuẩn.",
        "Đầu dò bút chì.",
        "Đầu dò tiếp cận hẹp.",
        "Đầu dò micro sensor."
      ],
      "answer": [1]
    },
    {
      "question": "31) Lần quét đầu tiên với đầu dò bút chì trên khu vực bị mài nên được thực hiện như thế nào?",
      "options": [
        "Trục đầu dò song song với chân mài.",
        "Trục đầu dò nghiêng 300 so với đường đáy vết mài.",
        "Trục đầu dò vuông góc với đường đáy vết mài.",
        "Trục đầu dò nghiêng -300 so với đường đáy vết mài."
      ],
      "answer": [2]
    },
    {
      "question": "32) Để xác định vị trí khuyết tật nằm ở đâu quanh khu vực mài khi phát hiện tín hiệu khuyết tật, cần thực hiện thêm hai lần quét với trục đầu dò ở các góc nào so với đường đáy vết mài?",
      "options": [
        "0 độ và 90 độ",
        "+30 độ và -30 độ.",
        "+45 độ và -45 độ",
        "+10 độ và -10 độ"
      ],
      "answer": [1]
    },
    {
      "question": "33) Trong quá trình mài loại bỏ khuyết tật, nếu MPI được sử dụng cùng với ACFM, cần lưu ý điều gì khi so sánh kết quả?",
      "options": [
        "Độ sâu khuyết tật từ MPI luôn chính xác hơn ACFM.",
        "Cần thận trọng khi so sánh kết quả để xác định kích thước.",
        "Chiều dài khuyết tật từ MPI có thể được sử dụng thay thế cho chiều dài Bz.",
        "Việc sử dụng MPI sẽ làm nhiễu tín hiệu ACFM."
      ],
      "answer": [1]
    },
    {
      "question": "34) Lợi thế của việc sử dụng trường đầu vào đồng nhất (uniform input field) trong đầu dò hàn tiêu chuẩn là gì, và nhược điểm liên quan là gì?",
      "options": [
        "Cho phép xác định kích thước khuyết tật; nhược điểm là chỉ phát hiện các khuyết tật sâu.",
        "Cho phép phát hiện khuyết tật qua lớp phủ; nhược điểm là tốc độ quét chậm.",
        "Cho phép xác định kích thước khuyết tật; nhược điểm là đầu dò nhận tín hiệu mạnh từ những thay đổi hình học sắc nét như cạnh tấm.",
        "Giúp giảm thiểu lỗi lift-off; nhược điểm là chỉ dùng được cho mối hàn."
      ],
      "answer": [2]
    },
    {
      "question": "35) \"Hiệu ứng cạnh\" (edge effect) xảy ra khi nào đối với đầu dò hàn tiêu chuẩn?",
      "options": [
        "Khi điểm giữa của đầu dò nằm trong khoảng 10mm so với cạnh.",
        "Khi điểm giữa của đầu dò nằm trong khoảng 50mm so với cạnh.",
        "Khi đầu dò được sử dụng trên vật liệu Duplex.",
        "Khi đầu dò được quét dọc theo đường hàn."
      ],
      "answer": [1]
    },
    {
      "question": "36) Với vật liệu Duplex, điều gì có thể dẫn đến các tín hiệu giả mạnh trên cả Bx và Bz có thể bị nhầm lẫn với tín hiệu khuyết tật?",
      "options": [
        "Độ dày lớp phủ.",
        "Khu vực mài bề mặt hoặc gia công trên bề mặt.",
        "Độ nhạy của đầu dò.",
        "Tốc độ quét."
      ],
      "answer": [1]
    },
    {
      "question": "37) Đối với vật liệu khác ngoài thép Ferritic (ví dụ: Duplex, nhôm, thép không gỉ), cần làm gì để đảm bảo độ chính xác của việc xác định kích thước và độ nhạy hiển thị?",
      "options": [
        "Sử dụng cùng một tệp đầu dò như đối với thép Ferritic.",
        "Chỉ cần hiệu chỉnh lại thiết bị.",
        "Phải hiệu chuẩn lại đầu dò trên mẫu chuẩn có cùng loại vật liệu với mẫu kiểm tra.",
        "Chỉ cần quét chậm hơn."
      ],
      "answer": [2]
    },
    {
      "question": "38) Vật liệu nào được biết là dễ gây tín hiệu giả (spurious signals) hơn các vật liệu khác do sự khác biệt vật liệu phát sinh từ việc mài, xử lý nhiệt, v.v.?",
      "options": [
        "Thép carbon.",
        "Thép Ferritic.",
        "Duplex.",
        "Nhôm."
      ],
      "answer": [2]
    },
    {
      "question": "39) Quy tắc được áp dụng để xác định tín hiệu là khuyết tật trong phương pháp thông thường là gì?",
      "options": [
        "Bz có cực đại và cực tiểu, và Bx có cực đại so với giá trị trung bình.",
        "Bz có cực đại và cực tiểu, và Bx có sự suy giảm tín hiệu đột ngột.",
        "Chỉ cần Bx có sự suy giảm.",
        "Chỉ cần Bz cực đại và cực tiểu."
      ],
      "answer": [1]
    },
    {
      "question": "40) Phím tắt nào dùng để chọn hướng di chuyển đầu dò",
      "options": [
        "C, A và O.",
        "C, A và T.",
        "C, A và P.",
        "C, A và F"
      ],
      "answer": [1]
    },
    {
      "question": "41) Biểu đồ con bướm bắt nguồn từ đâu?",
      "options": [
        "Biểu đồ kết hợp của biểu đồ Bx và Bz bao gồm cơ sở thời gian",
        "Biểu đồ kết hợp của biểu đồ Bx và Bz không bao gồm cơ sở thời gian",
        "Một sơ đồ độc lập hiển thị kích thước chính xác của bất kỳ vết nứt nào",
        "Mức từ thông vuông góc với bề mặt đang kiểm tra."
      ],
      "answer": [1]
    },
    {
      "question": "42) Khi thực hiện OPS check tại vị trí bắt đầu quét, tín hiệu nào sẽ có khả năng có vết nứt khi bắt đầu quét?",
      "options": [
        "Tín hiệu Bz sẽ tăng lên.",
        "Tín hiệu Bz sẽ giảm",
        "Tín hiệu Bx sẽ giảm",
        "Tín hiệu Bx sẽ tăng"
      ],
      "answer": [2]
    },
    {
      "question": "43) Nhấn phím 'Z' sẽ?",
      "options": [
        "Căn giữa dữ liệu trong cửa sổ",
        "Giảm mức thu phóng trên phần thu phóng hiện",
        "Phóng to trang để vừa với vùng được chọn trong cửa d_z",
        "Tự động phóng to dữ liệu màn hình lên 100%"
      ],
      "answer": [2]
    },
    {
      "question": "44) Khoảng cách vật lý giữa các đỉnh Bz trên tín hiệu nứt biểu thị cho?",
      "options": [
        "Chiều dài vết nứt thực tế",
        "Độ sâu vết nứt",
        "Các điểm bên trong chiều dài vết nứt, liên quan đến chiều dài vết nứt",
        "B và C đều đúng"
      ],
      "answer": [2]
    },
    {
      "question": "45) Trong quá trình quét dọc theo tâm mũ hàn để phát hiện khuyết tật ngang, khuyết tật có tín hiệu như thế nào?",
      "options": [
        "Một vòng lặp hoàn chỉnh.",
        "Một đỉnh lớn ở Bz.",
        "Một cực tiểu trên Bx, Bz có thể là một cực đại hay cực tiểu.",
        "Một vòng lặp di chuyển xuống."
      ],
      "answer": [2]
    },
    {
      "question": "46) Để xác nhận một chỉ thị giống khuyết tật nứt ngang tìm thấy trong quá trình quét dọc mối hàn, cần thực hiện quét như thế nào?",
      "options": [
        "Quét lại dọc theo tâm mũ hàn với tốc độ chậm hơn.",
        "Quét vuông góc qua mũ hàn tại vị trí ghi nhận chỉ thị.",
        "Quét dọc theo chân hàn.",
        "Thay đổi tần số đầu dò."
      ],
      "answer": [1]
    },
    {
      "question": "47) Làm thế nào để phân biệt tín hiệu khuyết tật với tín hiệu gây ra do mài bề mặt hoặc gia công trên bề mặt khi quét?",
      "options": [
        "Tín hiệu Bz từ mài sẽ lớn hơn nhiều.",
        "Tín hiệu từ khuyết tật (đặc biệt là Bz) sẽ giảm nhanh khi quét song song cách xa chân hàn, trong khi tín hiệu do mài thì không.",
        "Tín hiệu Bx từ mài sẽ lớn hơn nhiều.",
        "Tín hiệu từ mài sẽ tạo ra một vòng lặp kín."
      ],
      "answer": [1]
    },
    {
      "question": "48) Khi nghi ngờ có tín hiệu tại hoặc gần một đường hàn nối (seam weld), cần thực hiện các lần quét bổ sung như thế nào để xác nhận?",
      "options": [
        "Quét vuông góc với đường hàn nối.",
        "Quét cách xa nhưng song song với đường khuyết tật nghi ngờ.",
        "Quét với đầu dò bút chì.",
        "Quét với tần số khác."
      ],
      "answer": [1]
    },
    {
      "question": "49) Tác động của lift-off (nhấc đầu dò) lên tín hiệu Bx và Bz là gì?",
      "options": [
        "Bx sẽ tạo ra cực đại hoặc cực tiểu, kèm theo một phản ứng lớn từ Bz.",
        "Bx sẽ tạo ra cực đại hoặc cực tiểu (tùy thuộc vào loại vật liệu) với ít thay đổi từ Bz.",
        "Bz sẽ tạo ra cực đại hoặc cực tiểu.",
        "Cả Bx và Bz đều có tạo ra cực đại hoặc cực tiểu."
      ],
      "answer": [1]
    },
    {
      "question": "50) Nếu lift-off xảy ra, biểu đồ bướm (butterfly plot) sẽ như thế nào?",
      "options": [
        "Đồ thị cánh bướm theo hướng đi lên.",
        "Đồ thị cánh bướm theo hướng đi xuống.",
        "Nửa đồ thị cánh bướm theo hướng đi ở trục dọc.",
        "Nửa đồ thị cánh bướm theo hướng đi ở trục ngang."
      ],
      "answer": [0]
    },
    {
      "question": "51) Đối với tín hiệu được coi là đại diện cho một khuyết tật theo quy tắc chung, đồ thị cánh bướm phải di chuyển theo hướng nào?",
      "options": [
        "Hướng đi lên.",
        "Hướng đi xuống.",
        "Hướng đi sang phải.",
        "Hướng đi sang trái."
      ],
      "answer": [1]
    },
    {
      "question": "52) Đối với việc xác định kích thước vết nứt, phần mềm yêu cầu ba tham số nào?",
      "options": [
        "Bx lớn nhất, Bz lớn nhất và độ sâu ước tính.",
        "Bx nền (Background Level), Bx tối thiểu (Minimum Level) và chiều dài ước tính (khoảng cách giữa cực tiểu và cực đại Bz).",
        "Bx và Bz tối thiểu, và loại vật liệu.",
        "Bx nền, độ dày lớp phủ và tốc độ quét."
      ],
      "answer": [1]
    },
    {
      "question": "53) Giá trị tính toán độ sâu vết nứt thường lớn hơn chiều cao thực tế. Vì sao?",
      "options": [
        "Vết nứt chắc chắn xuyên qua tấm.",
        "Độ sâu vết nứt trên ACFM không phải giá trị theo chiều xuyên chiều dày đối tượng kiểm tra và được tính dọc theo mặt vết nứt",
        "Phép tính là không chính xác.",
        "Cần sử dụng đầu dò khác."
      ],
      "answer": [1]
    },
    {
      "question": "54) Khoảng cách giữa các đỉnh của tín hiệu Bz được gọi là gì?",
      "options": [
        "Chiều dài thực tế của vết nứt.",
        "Chiều dài ACFM.",
        "Chiều dài Bz (Bz Length).",
        "Chiều dài MPI."
      ],
      "answer": [1]
    },
    {
      "question": "55) Chiều dài Bz (Bz Length) so với chiều dài vết nứt thực tế như thế nào?",
      "options": [
        "Luôn lớn hơn chiều dài vết nứt thực tế.",
        "Luôn bằng chiều dài vết nứt thực tế.",
        "Luôn nhỏ hơn chiều dài vết n nút thực tế.",
        "Chỉ bằng chiều dài vết nứt khi vết nứt nông."
      ],
      "answer": [2]
    },
    {
      "question": "56) Theo tiêu chuẩn ABS-2020, nếu bề mặt có lớp phủ không dẫn điện, độ dày tối đa nào được phép mà không cần loại bỏ lớp phủ trước khi kiểm tra ACFM?",
      "options": [
        "10.0 mm (3/8 in.)",
        "3.0 mm (1/8 in.)",
        "Không có giới hạn độ dày nếu lớp phủ không dẫn điện",
        "6.5 mm (1/4 in.)"
      ],
      "answer": [3]
    },
    {
      "question": "57) Theo tiêu chuẩn ABS-2020, kích thước tiêu chuẩn của đồ thị cánh bướm là:",
      "options": [
        "50% chiều cao và 175% chiều rộng",
        "50% chiều cao và 100% chiều rộng",
        "25% chiều cao và 50% chiều rộng",
        "100% chiều cao và 100% chiều rộng"
      ],
      "answer": [0]
    },
    {
      "question": "58) Nếu biểu đồ con bướm xuất hiện đi chéo lên về phía bên trái , điều gì sẽ gây ra điều này",
      "options": [
        "Sự gia tăng của BX và sự giảm của BZ",
        "Sự gia tăng của BX và BZ",
        "Giảm BX và tăng BZ",
        "Giảm BX và BZ"
      ],
      "answer": [1]
    },
    {
      "question": "59) Nếu biểu đồ con bướm xuất hiện đi chéo lên về phía bên phải , điều gì sẽ gây ra điều này",
      "options": [
        "Sự gia tăng của BX và sự giảm của BZ",
        "Sự gia tăng của BX và BZ",
        "Giảm BX và tăng BZ",
        "Giảm BX và BZ"
      ],
      "answer": [0]
    },
    {
      "question": "60) Nếu biểu đồ con bướm xuất hiện đi chéo xuống về phía bên phải , điều gì sẽ gây ra điều này",
      "options": [
        "Sự gia tăng của BX và sự giảm của BZ",
        "Sự gia tăng của BX và BZ",
        "Giảm BX và tăng BZ",
        "Giảm BX và BZ"
      ],
      "answer": [3]
    },
    {
      "question": "61) Nếu biểu đồ con bướm xuất hiện đi chéo xuống về phía bên trái , điều gì sẽ gây ra điều này",
      "options": [
        "Sự gia giảm của BX và sự tăng của BZ",
        "Sự gia tăng của BX và BZ",
        "Giảm BX và tăng BZ",
        "Giảm BX và BZ"
      ],
      "answer": [0]
    },
    {
      "question": "62) Nếu được yêu cầu bắt đầu quét ở vị trí 10, ống có 12 vị trí và quét đến vị trí 3, nhưng không qua vị trí 12 giờ. Cài đặt nào sau đây sẽ được yêu cầu",
      "options": [
        "Vị trí bắt đầu 10 vị trí kết thúc 1, giảm dần",
        "Vị trí bắt đầu 10 vị trí kết thúc 3, tăng dần",
        "Vị trí bắt đầu 3 vị trí kết thúc 10, giảm dần",
        "Vị trí bắt đầu 3 vị trí kết thúc 10, tăng dần"
      ],
      "answer": [0]
    },
    {
      "question": "63) Nếu được yêu cầu bắt đầu quét ở vị trí 9, ống có 12 vị trí và quét đến vị trí 3, qua vị trí 12 giờ. Cài đặt nào sau đây sẽ được yêu cầu",
      "options": [
        "Vị trí bắt đầu 8 vị trí kết thúc 3, giảm dần",
        "Vị trí bắt đầu 8 vị trí kết thúc 3, tăng dần",
        "Vị trí bắt đầu 3 vị trí kết thúc 10, giảm dần",
        "Vị trí bắt đầu 3 vị trí kết thúc 10, tăng dần"
      ],
      "answer": [1]
    },
    {
      "question": "64) Phím nóng để tạm dừng quét là:",
      "options": [
        "Z",
        "P",
        "N",
        "S"
      ],
      "answer": [1]
    },
    {
      "question": "65) Phím nóng để áp dụng các điểm đánh dấu 2 điểm bắt đầu và kết thúc khuyết tật là",
      "options": [
        "Enter key",
        "M key",
        "Space bar",
        "Tab key"
      ],
      "answer": [0]
    },
    {
      "question": "66) Khi nghi ngờ có khuyết tật ngang, để thu được tín hiệu từ khuyết tật ngang thì điện trường phải vuông góc với khuyết tật vì vậy phải xoay đầu dò ACFM một góc bao nhiêu độ:",
      "options": [
        "45 độ",
        "90 độ",
        "180 độ",
        "0 độ"
      ],
      "answer": [1]
    }
  ]
};
