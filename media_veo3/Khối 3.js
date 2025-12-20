const DATA_KHOI_3 = `
    <div class="manual-section text-slate-800 dark:text-slate-200">
        <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4 mt-2 border-b border-blue-200 dark:border-blue-800 pb-2">
            KHỐI 3 – KHAI BÁO ĐẦU DÒ / NÊM (LOAD PROBE / LOAD WEDGE)
        </h3>

        <!-- 3.1 Load Probe -->
        <div class="mb-6">
            <h4 class="font-bold text-lg text-slate-700 dark:text-blue-300 mb-2">3.1. Load Probe (Chọn đầu dò)</h4>
            
            <p class="font-semibold mb-1">Thao tác:</p>
            <ul class="list-disc pl-5 mb-4 text-sm space-y-1">
                <li>Trên giao diện VEO3, nhấn vào tab menu <strong>Probe</strong>.</li>
                <li>Nhấn nút <strong>Load Probe</strong> (Tải đầu dò). Một danh sách cơ sở dữ liệu (Database) sẽ hiện ra.</li>
                <li>Chọn đúng model đầu dò PA (Kiểm tra Tên/Tần số/Số lượng biến tử...).</li>
                <li>Nhấn nút <strong>Load</strong> để máy ghi nhận.</li>
            </ul>

            <div class="bg-slate-100 dark:bg-slate-800 p-3 rounded mb-3">
                <p class="font-bold text-sm mb-2 text-slate-600 dark:text-slate-400">Các loại thông dụng tại BCH:</p>
                <ul class="space-y-2 text-sm">
                    <li><span class="font-bold text-blue-600">A15 (Thường là SA15-N60S):</span> Dùng cho mối hàn nhỏ, mỏng, không gian hẹp.</li>
                    <li><span class="font-bold text-blue-600">A10 (SA10-N55S):</span> Thông dụng cho đa dạng độ dày mối hàn.</li>
                    <li><span class="font-bold text-blue-600">A12 (SA12-N55S):</span> Dùng cho mối hàn lớn/tôn dày. Ưu tiên chọn A12 vì nhiều biến tử hơn, hình ảnh tốt hơn.</li>
                </ul>
            </div>
            
            <div class="bg-blue-50 dark:bg-blue-900/20 p-2 rounded border-l-4 border-blue-500">
                <p class="text-sm"><strong>Lưu ý:</strong> Kiểm tra bề mặt biến tử (mặt đen dưới đáy) xem có bị trầy xước hay bong tróc không.</p>
            </div>
        </div>

        <!-- 3.2 Load Wedge -->
        <div class="mb-6">
            <h4 class="font-bold text-lg text-slate-700 dark:text-blue-300 mb-2">3.2. Load Wedge (Chọn nêm) – Rất dễ nhầm lẫn</h4>
            
            <div class="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-3 mb-4">
                <p class="font-bold text-yellow-700 dark:text-yellow-400 text-sm uppercase">Quy tắc vàng</p>
                <p class="text-sm">Đường kính ống bao nhiêu thì phải đi tìm cái nêm ghi số bấy nhiêu.</p>
                <p class="text-sm mt-1"><strong>Ví dụ:</strong> Ống đường kính ~60mm (2 inch) → Phải tìm nêm có khắc chữ <strong>2.375"</strong>.</p>
            </div>

            <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-3 mb-4">
                <p class="font-bold text-red-700 dark:text-red-400 text-sm uppercase">Cảnh báo</p>
                <p class="text-sm text-red-900 dark:text-red-100">Dùng nêm nhỏ quét ống to (ví dụ nêm 2" quét ống 4") sẽ tạo khe hở khí, sóng âm không truyền vào được và sai lệch độ sâu khuyết tật. Không siết quá chặt làm nứt nêm, không quá lỏng gây nhiễu.</p>
            </div>

            <p class="font-semibold mb-1">Thao tác:</p>
            <ul class="list-disc pl-5 text-sm space-y-2 mb-4">
                <li>Nhấn vào tab menu <strong>Wedge</strong> → Nhấn nút <strong>Load Wedge</strong>.</li>
                <li>Chọn Type (Loại nêm):
                    <ul class="list-circle pl-5 mt-1 space-y-1">
                        <li><strong>Angular (Nêm góc):</strong> Chọn khi kiểm tra mối hàn (PA weld inspection). Tạo sóng ngang (Shear Wave). Hầu hết nêm cong cho ống thuộc loại này.</li>
                        <li><strong>Flat (Nêm phẳng/Không đế):</strong> Chỉ dùng cho tôn tấm phẳng, ống cực lớn (>20 inch), đo ăn mòn hoặc kiểm tra vật liệu cơ bản bằng sóng dọc (0 độ).</li>
                    </ul>
                </li>
                <li>Chọn đúng model nêm → Nhấn <strong>Load</strong>.</li>
            </ul>
        </div>
    </div>
`;