const DATA_KHOI_6 = `
    <div class="manual-section text-slate-800 dark:text-slate-200">
        <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4 mt-2 border-b border-blue-200 dark:border-blue-800 pb-2">
            KHỐI 6 – HIỆU CHUẨN (CALIBRATION) – QUAN TRỌNG NHẤT
        </h3>

        <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-4 mb-5">
            <p class="font-bold text-red-700 dark:text-red-400 text-sm uppercase mb-2">NGUYÊN TẮC BẮT BUỘC</p>
            <p class="text-sm font-semibold">Phải thực hiện theo đúng thứ tự:</p>
            <ol class="list-decimal pl-5 text-sm font-bold text-red-800 dark:text-red-200 mt-1">
                <li>Velocity (Vận tốc)</li>
                <li>Wedge Delay (Độ trễ nêm)</li>
                <li>Sensitivity (Độ nhạy)</li>
                <li>TCG (Bổ chính tổn hao)</li>
            </ol>
            <p class="text-sm mt-2">Sử dụng mẫu chuẩn phù hợp (V1/IIW, V2 cho ASME hoặc mẫu khấc cho API...).</p>
            <p class="text-sm mt-1">Vào Menu Wizards → chọn Calibration.</p>
        </div>

        <div class="space-y-6 text-sm">
            <!-- 1. Velocity -->
            <div>
                <h4 class="font-bold text-lg text-blue-700 dark:text-blue-300 border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">1. Hiệu chuẩn Vận tốc (Velocity Calibration)</h4>
                <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                    <li><strong>Mục đích:</strong> Xác định tốc độ âm thanh trong vật liệu để tính đúng khoảng cách. (Chỉ cần calib Group 1 → Group 2 tự nhận).</li>
                    <li><strong>Cài đặt:</strong> Box <strong>Calibrate</strong> → Chọn <strong>Velocity</strong> → Chọn Group (S1) → Type: <strong>Thickness</strong> (hoặc Radius).</li>
                    <li><strong>Thao tác:</strong>
                        <ul class="list-circle pl-5 mt-1">
                            <li>Đặt đầu dò lên mẫu, tìm tín hiệu xung đáy lặp lại nhiều lần trên A-Scan.</li>
                            <li>Cài đặt cổng (Gates):
                                <br>- Gate 1: Bao trùm đỉnh xung đáy thứ nhất.
                                <br>- Gate 2: Bao trùm đỉnh xung đáy thứ hai.
                            </li>
                            <li>Nhập chiều dày thực tế của mẫu (ví dụ: 25.00 mm).</li>
                            <li>Nhấn <strong>Next</strong> → <strong>Next</strong> đến khi đạt vận tốc chuẩn.</li>
                        </ul>
                    </li>
                    <li class="italic text-slate-600 dark:text-slate-400"><strong>Lưu ý:</strong> Thép Carbon thường khoảng 3230 ~ 3260 m/s. Nếu ra ~5900 m/s (sóng dọc) là sai, cần kiểm tra lại setup.</li>
                </ul>
            </div>

            <!-- 2. Wedge Delay -->
            <div>
                <h4 class="font-bold text-lg text-blue-700 dark:text-blue-300 border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">2. Hiệu chuẩn Độ trễ nêm (Wedge Delay Calibration)</h4>
                <p class="italic text-sm text-gray-500 mb-2">(Chỉ làm sau khi đã xong Velocity)</p>
                <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                    <li><strong>Mục đích:</strong> Bù trừ thời gian sóng đi trong nêm để tính đúng <strong>Độ sâu</strong> và <strong>Vị trí</strong>.</li>
                    <li class="text-red-600 dark:text-red-400"><strong>Hậu quả nếu sai:</strong> Sai độ sâu, sai vị trí chân/mặt mối hàn, ACG/TCG sai. Đường cong phải chuẩn, không được hình lưỡi liềm.</li>
                    <li><strong>Cài đặt:</strong> Box <strong>Calibrate</strong> → <strong>Wedge Delay</strong> → Type: <strong>Radius</strong>.</li>
                    <li>Nhập bán kính mẫu (ví dụ: 100.00 mm cho cung R100).</li>
                    <li>Điều chỉnh <strong>Start / Range box</strong> (vùng xanh) rộng rãi bao trùm xung → <strong>Next</strong>.</li>
                    <li>Nhập <strong>Reference Path</strong> (cung mẫu) và <strong>Tolerance Path</strong> (1 mm).</li>
                    <li><strong>Thao tác:</strong>
                        <ul class="list-circle pl-5 mt-1">
                            <li>Di chuyển đầu dò <strong>thật chậm, ổn định</strong> để tìm vị trí tín hiệu phản hồi từ cung tròn đạt biên độ cao nhất (đỉnh).</li>
                            <li>Giữ cố định tại đó. Nếu chưa đạt, nhấn <strong>Reset Envelope</strong>. Nếu đạt, nhấn <strong>Apply Wedge Delay (REC)</strong>.</li>
                        </ul>
                    </li>
                    <li><strong>Kiểm tra:</strong> Trên S-scan, tín hiệu xung phải thẳng (không cong), đúng vị trí Index/độ sâu → Nhấn Accept.</li>
                    <li>Lặp lại cho Group 2/3 nếu có.</li>
                </ul>
            </div>

            <!-- 3. Sensitivity -->
            <div>
                <h4 class="font-bold text-lg text-blue-700 dark:text-blue-300 border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">3. Hiệu chuẩn Độ nhạy / ACG (Sensitivity)</h4>
                <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                    <li><strong>Mục đích:</strong> Cân bằng năng lượng giữa các góc quét (ví dụ: góc 45° và 70° phải cho biên độ bằng nhau với cùng 1 khuyết tật).</li>
                    <li><strong>Cài đặt:</strong> Box <strong>Calibrate</strong> → <strong>Sensitivity</strong>. Đặt <strong>Amp Tolerance</strong> ≤ 5%.</li>
                    <li><strong>Thao tác:</strong>
                        <ul class="list-circle pl-5 mt-1">
                            <li>Dùng lỗ khoan cạnh (SDH) trên khối V1 (ví dụ lỗ 1.5mm sâu 15mm).</li>
                            <li>Kéo đầu dò tới lui thật chậm để tất cả các chùm tia (góc nhỏ → lớn) đều quét qua lỗ và đạt đỉnh.</li>
                            <li>Khi đường bao (envelope) xanh lá cây mượt và đủ góc → Nhấn <strong>Calibrate</strong>.</li>
                            <li>Máy tự động nâng các đỉnh lên mức tham chiếu (80% FSH). Kiểm tra lại thấy chuẩn → Apply Sensitivity → Accept.</li>
                        </ul>
                    </li>
                    <li>Lặp lại cho Group 2/3 nếu có.</li>
                </ul>
            </div>

            <!-- 4. TCG -->
            <div>
                <h4 class="font-bold text-lg text-blue-700 dark:text-blue-300 border-b border-gray-200 dark:border-gray-700 pb-1 mb-2">4. Hiệu chuẩn TCG (Time Corrected Gain)</h4>
                <ul class="list-disc pl-5 space-y-1 text-slate-700 dark:text-slate-300">
                    <li><strong>Mục đích:</strong> Bù suy giảm năng lượng theo độ sâu (khuyết tật sâu và nông cùng kích thước sẽ có biên độ tương đồng).</li>
                    <li><strong>Cài đặt:</strong>
                        <ul class="list-circle pl-5 mt-1">
                            <li>Box <strong>Calibrate</strong> → Curve type: <strong>TCG</strong> → Mode: <strong>Automated</strong>.</li>
                            <li>Amp tolerance: 5–10%; Threshold: 5%.</li>
                        </ul>
                    </li>
                    <li><strong>Quy trình:</strong>
                        <ul class="list-circle pl-5 mt-1">
                            <li><strong>Lỗ 1 (Nông nhất):</strong> Quét lỗ → <strong>REC</strong> → Chạy kiểm tra lại → Nhấn <strong>Next Reflector</strong>.</li>
                            <li><strong>Lỗ 2:</strong> Quét lỗ → <strong>REC</strong> → Chạy kiểm tra lại → Nhấn <strong>Next Reflector</strong>.</li>
                            <li><strong>Lỗ cuối:</strong> Quét lỗ → <strong>REC</strong> → Kiểm tra OK → <span class="text-red-600 font-bold">KHÔNG</span> nhấn Next Reflector mà nhấn <strong>Next (>)</strong> → <strong>Accept</strong>.</li>
                        </ul>
                    </li>
                    <li><strong>Xử lý lỗi:</strong> Sai 1 lỗ → <strong>Reset TCG at Reflector</strong>; Sai toàn bộ → <strong>Reset TCG Calib</strong>.</li>
                </ul>
            </div>
        </div>

        <div class="mt-6 p-4 bg-slate-800 text-white rounded text-sm shadow-lg">
            <p class="font-bold text-yellow-400 uppercase mb-1">YÊU CẦU BẮT BUỘC (FINAL CHECK):</p>
            <p>Trước khi kiểm tra sản phẩm, phải đặt đầu dò lại lên mẫu chuẩn (cung R100, lỗ SDH...). Kiểm tra xem máy có báo đúng Độ sâu (Depth), Khoảng cách bề mặt và Biên độ không. Nếu sai lệch quá mức, phải Calib lại.</p>
        </div>
    </div>
`;