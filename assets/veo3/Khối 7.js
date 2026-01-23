const DATA_KHOI_7 = `
    <div class="manual-section text-slate-800 dark:text-slate-200">
        <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4 mt-2 border-b border-blue-200 dark:border-blue-800 pb-2">
            KHỐI 7 – HOÀN THIỆN THIẾT LẬP (FINAL SETUP)
        </h3>

        <div class="space-y-6 text-sm">
            <!-- 7.1 -->
            <div>
                <h4 class="font-bold text-lg text-slate-700 dark:text-slate-300 mb-2">7.1. Thiết lập bố cục màn hình (Views / Layout)</h4>
                <p class="pl-4 mb-2">Vào <strong>Menu Layout → Views</strong>.</p>
                <ul class="list-disc pl-8 space-y-1 text-slate-700 dark:text-slate-300">
                    <li><strong>S-scan:</strong> Để kích thước lớn nhất, ưu tiên trung tâm. Để biết vị trí khuyết tật.</li>
                    <li><strong>A-scan:</strong> Hiển thị song song (chia đôi màn hình). Dùng để kiểm tra biên độ, dạng xung.</li>
                    <li><strong>C-scan / Top View:</strong> Khuyến nghị dùng để quan sát dọc chiều dài mối hàn, phát hiện mất tiếp âm.</li>
                </ul>
            </div>

            <!-- 7.2 -->
            <div>
                <h4 class="font-bold text-lg text-slate-700 dark:text-slate-300 mb-2">7.2. Cài đặt Cổng tín hiệu (Gate Setup)</h4>
                <p class="pl-4 mb-2">Vào <strong>Menu Gate</strong>.</p>
                <ul class="list-disc pl-8 space-y-1 text-slate-700 dark:text-slate-300">
                    <li><strong>Cổng 1 (Gate 1 - Bắt khuyết tật):</strong>
                        <ul class="list-circle pl-5 mt-1">
                            <li>Điều chỉnh bao phủ toàn bộ mối hàn và vùng HAZ.</li>
                            <li><strong>Lưu ý:</strong> Tránh bắt vào nhiễu cố định (nhiễu nêm).</li>
                            <li><strong>Mode:</strong> Chọn <strong>Peak</strong>.</li>
                        </ul>
                    </li>
                    <li><strong>Cổng 2 (Gate 2 - Kiểm tra tiếp âm):</strong> Đặt tại vùng tín hiệu đáy để giám sát mất tiếp âm.</li>
                </ul>
            </div>

            <!-- 7.3 -->
            <div>
                <h4 class="font-bold text-lg text-slate-700 dark:text-slate-300 mb-2">7.3. Tối ưu hóa thông số quét</h4>
                <ul class="list-disc pl-8 space-y-1 text-slate-700 dark:text-slate-300">
                    <li><strong>Cắt dải quét (Start/Range Path):</strong> Vào Menu <strong>SCAN</strong>, đặt Start và Range hợp lý để loại bỏ vùng dư thừa, giảm dung lượng file.</li>
                    <li><strong>Tối ưu tốc độ (PRF Control):</strong> Vào Menu <strong>SCAN → PRF control</strong>. Mode: <strong>Manual</strong>. Tăng Max PRF cao (ví dụ ~7000 Hz) để hình ảnh mượt, giảm miss dữ liệu.</li>
                </ul>
            </div>

            <!-- 7.4 -->
            <div>
                <h4 class="font-bold text-lg text-slate-700 dark:text-slate-300 mb-2">7.4. Kiểm tra cuối cùng & Cài đặt phụ</h4>
                <ul class="list-disc pl-8 space-y-2 text-slate-700 dark:text-slate-300">
                    <li><strong>Tăng độ nhạy (Scanning Gain):</strong> Vào Menu <strong>SCAN → Gain</strong>. Tăng thêm <strong>+6 dB đến +12 dB</strong> so với mức Gain sau Calib để bù tổn hao bề mặt.</li>
                    
                    <li class="bg-amber-50 dark:bg-amber-900/20 p-3 rounded border border-amber-200 dark:border-amber-800">
                        <span class="font-bold text-amber-700 dark:text-amber-400 uppercase">Cài đặt Encoder (QUAN TRỌNG):</span>
                        <ul class="list-circle pl-5 mt-2 space-y-1">
                            <li>Nhấn <strong>Pause</strong> → <strong>Menu Encoding → Encoding Setup</strong>.</li>
                            <li><strong>Select mode:</strong> <span class="font-bold text-red-600 dark:text-red-400">Scan Axis Only</span> (Bắt buộc để ghi dữ liệu kèm vị trí).</li>
                            <li><strong>Scan Enc Resolution:</strong> Nhập đúng thông số Encoder.</li>
                        </ul>
                    </li>

                    <li><strong>Chỉnh chiều hướng nêm (Geometry / Skew):</strong>
                        <ul class="list-circle pl-5 mt-1">
                            <li>Vào <strong>Menu Geometry</strong>. Chỉnh <strong>W1 Index</strong> (chuyển -16mm → +16mm) và <strong>W1 Rotation</strong> (90°/270°) tùy hướng quét.</li>
                            <li>Vào box <strong>View</strong>: Chọn <strong>View Orientation</strong> (Horizontal Left/Right) để S-scan hiển thị đúng hướng mối hàn.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
`;