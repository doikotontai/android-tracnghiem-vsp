const DATA_KHOI_2 = `
    <div class="manual-section text-slate-800 dark:text-slate-200">
        <!-- HEADER -->
        <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4 mt-2 border-b border-blue-200 dark:border-blue-800 pb-2">
            KHỐI 2 – TẠO SETUP MỚI (CREATE CONFIGURATION)
        </h3>

        <!-- MỤC TIÊU -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-3 mb-5">
            <p class="font-bold text-blue-700 dark:text-blue-300 text-sm uppercase mb-1">MỤC TIÊU:</p>
            <p class="text-sm">Khai báo đúng thiết bị, nhập đúng vật liệu & chiều dày, và vẽ lại chính xác biên dạng mối hàn trên màn hình máy để hỗ trợ việc đọc tín hiệu.</p>
        </div>

        <!-- 2.1 -->
        <div class="mb-5">
            <h4 class="font-bold text-lg text-slate-700 dark:text-blue-300 mb-2">2.1. Tạo cấu hình PAUT</h4>
            <p class="pl-4 text-sm">Từ màn hình chính → <strong>Files</strong> → <strong>Create Configuration</strong> → <strong>Phased Array</strong>.</p>
        </div>

        <!-- 2.2 -->
        <div class="mb-5">
            <h4 class="font-bold text-lg text-slate-700 dark:text-blue-300 mb-2">2.2. Nhập thông tin vật liệu & mối hàn</h4>
            <ul class="list-disc pl-5 space-y-2 text-sm mb-4">
                <li><strong>Vật liệu (Material):</strong> Chọn <strong>Steel</strong> (Thép Carbon).</li>
                <li><strong>Chiều dày (Thickness):</strong> Nhập chiều dày thực tế.</li>
                <li><strong>Loại mối hàn (Weld type):</strong> Chọn <strong>Single V</strong> hoặc <strong>Double V</strong>.</li>
                <li><strong>Vùng ảnh hưởng nhiệt (HAZ):</strong> ~ 5 mm.</li>
                <li><strong>Khe hở đáy (Root Gap):</strong> ~ 3 mm.</li>
            </ul>

            <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-3">
                <p class="font-bold text-amber-700 dark:text-amber-400 text-sm uppercase mb-1">Quan trọng:</p>
                <p class="text-sm mb-2">Tìm và điều chỉnh thông số <strong>Top Left Width</strong> sao cho giá trị <strong>Face Left</strong> (độ rộng mũ hàn bên trái) hiển thị trên màn hình xấp xỉ <strong>≈ 1 mm</strong>.</p>
                <p class="text-sm italic text-slate-600 dark:text-slate-400">Đây là bước rất quan trọng để hiển thị biên dạng mối hàn chính xác trên S-Scan, giúp người đọc dễ nhận biết vị trí khuyết tật (ví dụ: nứt chân, không ngấu vách).</p>
            </div>
        </div>

        <!-- 2.3 -->
        <div class="mb-4">
            <h4 class="font-bold text-lg text-slate-700 dark:text-blue-300 mb-2">2.3. Lưu cấu hình</h4>
            <p class="pl-4 text-sm">Nhấn <strong>Create/Apply</strong> để máy tính toán và lưu cấu hình.</p>
        </div>
    </div>
`;