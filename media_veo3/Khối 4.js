const DATA_KHOI_4 = `
    <div class="manual-section text-slate-800 dark:text-slate-200">
        <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4 mt-2 border-b border-blue-200 dark:border-blue-800 pb-2">
            KHỐI 4 – THIẾT LẬP SCAN PLAN (GROUP SETUP)
        </h3>

        <div class="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded p-3 mb-4">
            <p class="text-sm text-blue-800 dark:text-blue-200"><strong>MỤC ĐÍCH:</strong> Thiết lập luật hội tụ (Focal Law), cấu hình Group và chế độ vận hành để tối ưu cho các bước hiệu chuẩn (Calibration).</p>
        </div>

        <div class="space-y-4 text-sm">
            <!-- 4.1 -->
            <div>
                <h4 class="font-bold text-slate-700 dark:text-slate-300 text-base">4.1. Focal Law Type (Loại luật hội tụ)</h4>
                <p class="pl-4">Chọn <strong>Sonatest</strong>.</p>
            </div>

            <!-- 4.2 -->
            <div>
                <h4 class="font-bold text-slate-700 dark:text-slate-300 text-base">4.2. Scan Type (Kiểu quét)</h4>
                <p class="pl-4 mb-1">Lựa chọn: <strong>Linear</strong> hoặc <strong>Sectorial</strong>.</p>
                <ul class="list-disc pl-8 space-y-1">
                    <li><strong>Sectorial Scan (S-scan/Sóng rẽ quạt):</strong> Phổ biến cho kiểm tra mối hàn. Bao phủ dải góc rộng, tăng khả năng phát hiện khuyết tật đa hướng.</li>
                    <li><strong>Linear Scan:</strong> Chùm tia góc cố định, dịch chuyển tuyến tính. Hình ảnh ổn định, dễ định vị chiều sâu/trục quét, phù hợp đánh giá hình học rõ ràng.</li>
                </ul>
            </div>

            <!-- 4.3 -->
            <div>
                <h4 class="font-bold text-slate-700 dark:text-slate-300 text-base">4.3. Thiết lập thông số cho Group 1</h4>
                <ul class="list-disc pl-8 mt-1 space-y-1">
                    <li><strong>Nb of TX elements (Số biến tử phát):</strong> Chọn số lượng biến tử tham gia (Ví dụ: 16/64 biến tử của đầu dò A12).</li>
                    <li><strong>Index (Vị trí):</strong> Nhập <strong>Index Offset</strong> (Khoảng cách từ mặt trước nêm đến tâm mối hàn).</li>
                    <li><strong>Path:</strong> Giữ mặc định 0–100 mm.</li>
                    <li><strong>Resolution:</strong> 1° (Bước nhảy góc quét).</li>
                    <li><strong>Start/Stop Angle:</strong> Nhập dải góc quét mong muốn (Ví dụ: 40° đến 70°).</li>
                    <li><strong>Focal Mode:</strong> Chọn <strong>Natural</strong> (Tự nhiên) – chùm tia phân kỳ tự nhiên, không hội tụ tại 1 điểm, dùng cho thiết lập ban đầu.</li>
                </ul>
            </div>

            <!-- 4.4 -->
            <div>
                <h4 class="font-bold text-slate-700 dark:text-slate-300 text-base">4.4. Cài đặt bộ mã hóa (Encoding Setup)</h4>
                <ul class="list-disc pl-8 mt-1 space-y-1">
                    <li><strong>Thao tác:</strong> Trong phần cài đặt Encoder, chọn chế độ <strong>Time Based</strong> (Theo thời gian).</li>
                    <li><strong>Mục đích:</strong> Để thực hiện Calibration thuận lợi (quét tay tại chỗ).</li>
                    <li class="text-red-600 dark:text-red-400"><strong>Lưu ý:</strong> Sau khi Calib xong, chuyển sang quét thực tế PHẢI đổi lại sang <strong>Scan Axis Only</strong>.</li>
                </ul>
            </div>

            <!-- 4.5 -->
            <div>
                <h4 class="font-bold text-slate-700 dark:text-slate-300 text-base">4.5. Cài đặt độ lợi khuếch đại ban đầu (dB Gain)</h4>
                <p class="pl-4">Chỉnh Gain tạm thời lên mức <strong>~40 dB</strong> để tín hiệu đủ lớn, dễ nhìn khi Calib.</p>
            </div>

            <!-- 4.6 -->
            <div>
                <h4 class="font-bold text-slate-700 dark:text-slate-300 text-base">4.6. Hoàn tất</h4>
                <ul class="list-disc pl-8 mt-1 space-y-1">
                    <li>Nhấn <strong>Accept</strong> để máy tính toán luật hội tụ.</li>
                    <li>Nhấn phím cứng <strong>W (Weld overlay)</strong> để hiển thị biên dạng mối hàn trên S-scan.</li>
                </ul>
            </div>
        </div>
    </div>
`;