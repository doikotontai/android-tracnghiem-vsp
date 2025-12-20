const DATA_KHOI_1 = `
    <div class="manual-section text-slate-800 dark:text-slate-200">
        <!-- HEADER -->
        <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4 mt-2 border-b border-blue-200 dark:border-blue-800 pb-2">
            KHỐI 1 – KHỞI ĐỘNG & CHUẨN BỊ HỆ THỐNG
        </h3>

        <!-- 1.1 -->
        <div class="mb-6">
            <h4 class="font-bold text-lg text-slate-700 dark:text-blue-300 mb-2">1.1. Bật máy</h4>
            <ul class="list-disc pl-5 space-y-2 text-sm leading-relaxed">
                <li>
                    <span class="font-bold text-slate-900 dark:text-white">Kiểm tra nguồn:</span> 
                    Kiểm tra pin đã lắp chưa. Nhấn giữ nút <span class="font-bold">ON/OFF (Nguồn)</span> trong 5 giây.
                </li>
                <li>
                    <span class="font-bold text-slate-900 dark:text-white">Hoàn tất:</span> 
                    Đợi máy tải phần mềm lên màn hình chính là hoàn tất bước chuẩn bị.
                </li>
            </ul>
        </div>

        <!-- 1.2 -->
        <div class="mb-6">
            <h4 class="font-bold text-lg text-slate-700 dark:text-blue-300 mb-2">1.2. Kết nối phần cứng</h4>
            
            <div class="space-y-4 text-sm">
                <!-- Gắn đầu dò -->
                <div>
                    <p class="font-bold text-slate-900 dark:text-white mb-1">Gắn đầu dò PA (Phased Array):</p>
                    <ul class="list-disc pl-5 space-y-1">
                        <li>Cắm vào cổng <strong>I-PEX</strong> (cổng to nhất ở mặt trước máy VEO3).</li>
                    </ul>
                    <div class="bg-orange-50 dark:bg-orange-900/20 border-l-4 border-orange-500 p-3 mt-2">
                        <p class="text-orange-900 dark:text-orange-100">
                            <span class="font-bold uppercase text-xs">Lưu ý:</span> Khi cắm phải nghe tiếng <span class="font-bold">"Tách"</span> của lẫy khóa. Muốn rút phải bóp lẫy, <span class="font-bold text-red-600">tuyệt đối không giật dây</span>.
                        </p>
                    </div>
                </div>

                <!-- Lắp nêm -->
                <div>
                    <p class="font-bold text-slate-900 dark:text-white mb-1">Lắp nêm vào đầu dò:</p>
                    <div class="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-600 p-3">
                        <p class="text-red-900 dark:text-red-100">
                            <span class="font-bold uppercase text-red-700 dark:text-red-400">BẮT BUỘC</span> phải nhỏ một lượng gel/mỡ tiếp âm (couplant) vào giữa bề mặt tiếp xúc của hai linh kiện này trước khi úp đầu dò vào nêm.
                        </p>
                    </div>
                </div>

                <!-- Gắn Encoder -->
                <div>
                    <p class="font-bold text-slate-900 dark:text-white mb-1">Gắn Encoder:</p>
                    <ul class="list-disc pl-5">
                        <li>Kết nối Scan Axis / Index Axis vào cổng tương ứng (cổng Encoder 1).</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- 1.3 -->
        <div class="mb-4">
            <h4 class="font-bold text-lg text-slate-700 dark:text-blue-300 mb-2">1.3. Chuẩn bị môi trường quét</h4>
            <ul class="list-disc pl-5 space-y-1 text-sm leading-relaxed">
                <li>Lau sạch bề mặt nêm.</li>
                <li>Kiểm tra pin, tiếp âm, tình trạng cáp.</li>
                <li>Đảm bảo quạt thông gió không bị che (theo khuyến cáo của Sonatest).</li>
            </ul>
        </div>
    </div>
`;