// Lưu file này vào thư mục: media_veo3/Khối 2.js
// Nội dung được chuyển đổi từ file: KHỐI 2.docx

const DATA_KHOI_2 = `
    <div class="manual-section text-slate-800 dark:text-slate-200">
        
        <!-- TIÊU ĐỀ CHÍNH -->
        <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4 mt-2 border-b border-blue-200 dark:border-blue-800 pb-2">
            KHỐI 2 – TẠO SETUP MỚI (CREATE CONFIGURATION)
        </h3>

        <!-- MỤC TIÊU: KHUNG MÀU XANH -->
        <div class="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 mb-6 rounded-r">
            <p class="font-bold text-blue-700 dark:text-blue-300 text-sm uppercase mb-1">
                <span class="material-symbols-outlined align-bottom text-lg mr-1">target</span>MỤC TIÊU
            </p>
            <p class="text-sm text-blue-900 dark:text-blue-100 italic">
                Khai báo đúng thiết bị, nhập đúng vật liệu & chiều dày, và vẽ lại chính xác biên dạng mối hàn trên màn hình máy để hỗ trợ việc đọc tín hiệu.
            </p>
        </div>

        <!-- MỤC 2.1 -->
        <div class="mb-6">
            <h4 class="font-bold text-lg text-slate-700 dark:text-blue-300 mb-2">2.1. Tạo cấu hình PAUT</h4>
            <p class="text-sm pl-4 border-l-2 border-slate-200 dark:border-slate-700 ml-1">
                Từ màn hình chính <span class="text-slate-400">→</span> 
                <span class="font-bold bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-xs">Files</span> <span class="text-slate-400">→</span> 
                <span class="font-bold bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-xs">Create Configuration</span> <span class="text-slate-400">→</span> 
                <span class="font-bold bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded text-xs">Phased Array</span>.
            </p>
        </div>

        <!-- MỤC 2.2 -->
        <div class="mb-6">
            <h4 class="font-bold text-lg text-slate-700 dark:text-blue-300 mb-3">2.2. Nhập thông tin vật liệu & mối hàn</h4>
            
            <div class="overflow-hidden border rounded-lg border-slate-200 dark:border-slate-700 mb-4">
                <table class="min-w-full text-sm text-left">
                    <tbody class="divide-y divide-slate-100 dark:divide-slate-700">
                        <tr class="bg-slate-50 dark:bg-slate-800/50">
                            <td class="px-4 py-2 font-medium w-1/3">Vật liệu (Material)</td>
                            <td class="px-4 py-2">Chọn <span class="font-bold text-blue-600 dark:text-blue-400">Steel</span> (Thép Carbon)</td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2 font-medium">Chiều dày (Thickness)</td>
                            <td class="px-4 py-2">Nhập chiều dày thực tế</td>
                        </tr>
                        <tr class="bg-slate-50 dark:bg-slate-800/50">
                            <td class="px-4 py-2 font-medium">Loại mối hàn (Weld type)</td>
                            <td class="px-4 py-2">Chọn <span class="font-bold">Single V</span> hoặc <span class="font-bold">Double V</span></td>
                        </tr>
                        <tr>
                            <td class="px-4 py-2 font-medium">Vùng ảnh hưởng nhiệt (HAZ)</td>
                            <td class="px-4 py-2">~ 5 mm</td>
                        </tr>
                        <tr class="bg-slate-50 dark:bg-slate-800/50">
                            <td class="px-4 py-2 font-medium">Khe hở đáy (Root Gap)</td>
                            <td class="px-4 py-2">~ 3 mm</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- QUAN TRỌNG: KHUNG MÀU VÀNG/CAM -->
            <div class="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 rounded-r shadow-sm">
                <p class="font-bold text-amber-700 dark:text-amber-400 text-xs uppercase mb-1 flex items-center">
                    <span class="material-symbols-outlined text-lg mr-1">star</span> Quan trọng
                </p>
                <p class="text-sm text-slate-800 dark:text-slate-200 mb-2">
                    Tìm và điều chỉnh thông số <span class="font-bold">Top Left Width</span> sao cho giá trị <span class="font-bold">Face Left</span> (độ rộng mũ hàn bên trái) hiển thị trên màn hình xấp xỉ <span class="font-bold text-red-600 dark:text-red-400">≈ 1 mm</span>.
                </p>
                <p class="text-xs text-slate-600 dark:text-slate-400 italic border-t border-amber-200 dark:border-amber-800/30 pt-2 mt-2">
                    Đây là bước rất quan trọng để hiển thị biên dạng mối hàn chính xác trên S-Scan, giúp người đọc dễ nhận biết vị trí khuyết tật (ví dụ: nứt chân, không ngấu vách).
                </p>
            </div>
        </div>

        <!-- MỤC 2.3 -->
        <div class="mb-4">
            <h4 class="font-bold text-lg text-slate-700 dark:text-blue-300 mb-2">2.3. Lưu cấu hình</h4>
            <p class="text-sm pl-4">
                Nhấn nút <span class="font-bold text-white bg-green-600 px-2 py-1 rounded text-xs shadow-sm">Create/Apply</span> để máy tính toán và lưu cấu hình.
            </p>
        </div>

    </div>
`;