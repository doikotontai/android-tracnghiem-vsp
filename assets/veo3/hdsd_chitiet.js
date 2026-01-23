// Lưu file này vào thư mục: media_veo3/hdsd_chitiet.js
// Nội dung được chuyển đổi nguyên văn từ file: HƯỚNG DẪN VẬN HÀNH VEO3.docx

const DATA_HDSD_CHITIET = `
    <div class="manual-section text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
        
        <!-- HEADER -->
        <div class="text-center mb-8">
            <h1 class="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2 uppercase">HƯỚNG DẪN VẬN HÀNH VEO3</h1>
            <p class="italic text-gray-500">(Tổng hợp từ file nội bộ + manual hãng)</p>
        </div>

        <!-- MỤC LỤC -->
        <div class="bg-slate-50 dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 mb-8">
            <h2 class="font-bold text-lg mb-4 border-b border-slate-300 dark:border-slate-600 pb-2">MỤC LỤC</h2>
            <ul class="space-y-2 list-none">
                <li><a href="#khoi1" class="hover:text-blue-600 hover:underline">KHỐI 1 – KHỞI ĐỘNG & CHUẨN BỊ HỆ THỐNG</a></li>
                <li><a href="#khoi2" class="hover:text-blue-600 hover:underline">KHỐI 2 – TẠO SETUP MỚI (CREATE CONFIGURATION)</a></li>
                <li><a href="#khoi3" class="hover:text-blue-600 hover:underline">KHỐI 3 – KHAI BÁO ĐẦU DÒ / NÊM (LOAD PROBE / LOAD WEDGE)</a></li>
                <li><a href="#khoi4" class="hover:text-blue-600 hover:underline">KHỐI 4 – THIẾT LẬP SCAN PLAN (GROUP SETUP)</a></li>
                <li><a href="#khoi5" class="hover:text-blue-600 hover:underline">KHỐI 5 – TẠO GROUP 2 (NẾU CẦN)</a></li>
                <li><a href="#khoi6" class="hover:text-blue-600 hover:underline">KHỐI 6 – HIỆU CHUẨN (CALIBRATION)</a></li>
                <li><a href="#khoi7" class="hover:text-blue-600 hover:underline">KHỐI 7 – HOÀN THIỆN THIẾT LẬP (FINAL SETUP)</a></li>
                <li><a href="#khoi8" class="hover:text-blue-600 hover:underline">KHỐI 8 – QUÉT THỰC TẾ & DỮ LIỆU</a></li>
            </ul>
        </div>

        <!-- KHỐI 1 -->
        <div id="khoi1" class="mb-10 pt-4 border-t border-slate-200 dark:border-slate-700">
            <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4">KHỐI 1 – KHỞI ĐỘNG & CHUẨN BỊ HỆ THỐNG</h3>
            
            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300 mb-2">1.1. Bật máy</h4>
                <p class="mb-1"><span class="font-semibold">Kiểm tra nguồn:</span> Kiểm tra pin đã lắp chưa. Nhấn giữ nút <span class="font-bold border border-slate-300 px-1 rounded">ON/OFF</span> (Nguồn) trong 5 giây.</p>
                <p><span class="font-semibold">Hoàn tất:</span> Đợi máy tải phần mềm lên màn hình chính là hoàn tất bước chuẩn bị.</p>
            </div>

            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300 mb-2">1.2. Kết nối phần cứng</h4>
                
                <div class="ml-4 mb-3">
                    <p class="font-semibold mb-1 underline">Gắn đầu dò PA (Phased Array):</p>
                    <p class="mb-1">Cắm vào cổng I-PEX (cổng to nhất ở mặt trước máy VEO3).</p>
                    <div class="bg-orange-50 dark:bg-orange-900/20 text-orange-800 dark:text-orange-200 p-2 rounded border-l-4 border-orange-500 italic">
                        <strong>Lưu ý:</strong> Khi cắm phải nghe tiếng "Tách" của lẫy khóa. Muốn rút phải bóp lẫy, <strong>tuyệt đối không giật dây</strong>.
                    </div>
                </div>

                <div class="ml-4 mb-3">
                    <p class="font-semibold mb-1 underline">Lắp nêm vào đầu dò:</p>
                    <div class="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 p-2 rounded border-l-4 border-red-500">
                        <strong>BẮT BUỘC</strong> phải nhỏ một lượng gel/mỡ tiếp âm (couplant) vào giữa bề mặt tiếp xúc của hai linh kiện này trước khi úp đầu dò vào nêm.
                    </div>
                </div>

                <div class="ml-4">
                    <p class="font-semibold mb-1 underline">Gắn Encoder:</p>
                    <p>Kết nối Scan Axis / Index Axis vào cổng tương ứng (cổng Encoder 1).</p>
                </div>
            </div>

            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300 mb-2">1.3. Chuẩn bị môi trường quét</h4>
                <ul class="list-disc pl-5 space-y-1">
                    <li>Lau sạch bề mặt nêm.</li>
                    <li>Kiểm tra pin, tiếp âm, tình trạng cáp.</li>
                    <li>Đảm bảo quạt thông gió không bị che (theo khuyến cáo của Sonatest).</li>
                </ul>
            </div>
        </div>

        <!-- KHỐI 2 -->
        <div id="khoi2" class="mb-10 pt-4 border-t border-slate-200 dark:border-slate-700">
            <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-3">KHỐI 2 – TẠO SETUP MỚI (CREATE CONFIGURATION)</h3>
            <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded mb-4">
                <p><strong>MỤC TIÊU:</strong> Khai báo đúng thiết bị, nhập đúng vật liệu & chiều dày, và vẽ lại chính xác biên dạng mối hàn trên màn hình máy để hỗ trợ việc đọc tín hiệu.</p>
            </div>

            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300 mb-2">2.1. Tạo cấu hình PAUT</h4>
                <p>Từ màn hình chính → <strong>Files</strong> → <strong>Create Configuration</strong> → <strong>Phased Array</strong>.</p>
            </div>

            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300 mb-2">2.2. Nhập thông tin vật liệu & mối hàn</h4>
                <ul class="list-disc pl-5 space-y-2 mb-3">
                    <li><strong>Vật liệu (Material):</strong> Chọn <strong>Steel</strong> (Thép Carbon).</li>
                    <li><strong>Chiều dày (Thickness):</strong> Nhập chiều dày thực tế.</li>
                    <li><strong>Loại mối hàn (Weld type):</strong> Chọn <strong>Single V</strong> hoặc <strong>Double V</strong>.</li>
                    <li><strong>Vùng ảnh hưởng nhiệt (HAZ):</strong> ~ 5 mm.</li>
                    <li><strong>Khe hở đáy (Root Gap):</strong> ~ 3 mm.</li>
                </ul>
                
                <div class="bg-amber-50 dark:bg-amber-900/20 text-slate-800 dark:text-slate-200 p-3 rounded border-l-4 border-amber-500">
                    <p class="mb-2"><strong>Quan trọng:</strong> Tìm và điều chỉnh thông số <strong>Top Left Width</strong> sao cho giá trị <strong>Face Left</strong> (độ rộng mũ hàn bên trái) hiển thị trên màn hình xấp xỉ <strong>≈ 1 mm</strong>.</p>
                    <p class="italic text-sm text-slate-600 dark:text-slate-400">Đây là bước rất quan trọng để hiển thị biên dạng mối hàn chính xác trên S-Scan, giúp người đọc dễ nhận biết vị trí khuyết tật (ví dụ: nứt chân, không ngấu vách).</p>
                </div>
            </div>

            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300 mb-2">2.3. Lưu cấu hình</h4>
                <p>Nhấn <strong>Create/Apply</strong> để máy tính toán và lưu cấu hình.</p>
            </div>
        </div>

        <!-- KHỐI 3 -->
        <div id="khoi3" class="mb-10 pt-4 border-t border-slate-200 dark:border-slate-700">
            <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4">KHỐI 3 – KHAI BÁO ĐẦU DÒ / NÊM (LOAD PROBE / LOAD WEDGE)</h3>
            
            <div class="mb-6">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300 mb-2">3.1. Load Probe (Chọn đầu dò)</h4>
                <p class="underline mb-1">Thao tác:</p>
                <ul class="list-disc pl-5 mb-3">
                    <li>Trên giao diện VEO3, nhấn vào tab menu <strong>Probe</strong>.</li>
                    <li>Nhấn nút <strong>Load Probe</strong> (Tải đầu dò). Một danh sách cơ sở dữ liệu (Database) sẽ hiện ra.</li>
                    <li>Chọn đúng model đầu dò PA (Kiểm tra Tên/Tần số/Số lượng biến tử...).</li>
                    <li>Nhấn nút <strong>Load</strong> để máy ghi nhận.</li>
                </ul>
                
                <p class="underline mb-1">Các loại thông dụng tại BCH:</p>
                <ul class="list-disc pl-5 mb-3">
                    <li><strong>A15</strong> (Thường là SA15-N60S): Dùng cho mối hàn nhỏ, mỏng, không gian hẹp.</li>
                    <li><strong>A10</strong> (SA10-N55S): Thông dụng cho đa dạng độ dày mối hàn.</li>
                    <li><strong>A12</strong> (SA12-N55S): Dùng cho mối hàn lớn/tôn dày. Ưu tiên chọn A12 vì nhiều biến tử hơn, hình ảnh tốt hơn.</li>
                </ul>
                <p class="italic text-gray-600 dark:text-gray-400"><strong>Lưu ý:</strong> Kiểm tra bề mặt biến tử (mặt đen dưới đáy) xem có bị trầy xước hay bong tróc không.</p>
            </div>

            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300 mb-2">3.2. Load Wedge (Chọn nêm) – Rất dễ nhầm lẫn</h4>
                
                <div class="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded mb-3 border border-yellow-200 dark:border-yellow-800">
                    <p class="text-yellow-800 dark:text-yellow-200 font-bold mb-1">Quy tắc vàng:</p>
                    <p>Đường kính ống bao nhiêu thì phải đi tìm cái nêm ghi số bấy nhiêu.</p>
                    <p class="text-sm mt-1"><em>Ví dụ:</em> Ống đường kính ~60mm (2 inch) → Phải tìm nêm có khắc chữ <strong>2.375"</strong>.</p>
                </div>

                <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded mb-3 border border-red-200 dark:border-red-800">
                    <p class="text-red-800 dark:text-red-200 font-bold mb-1">Cảnh báo:</p>
                    <p>Dùng nêm nhỏ quét ống to (ví dụ nêm 2" quét ống 4") sẽ tạo khe hở khí, sóng âm không truyền vào được và sai lệch độ sâu khuyết tật. Không siết quá chặt làm nứt nêm, không quá lỏng gây nhiễu.</p>
                </div>

                <p class="underline mb-1">Thao tác:</p>
                <ul class="list-disc pl-5">
                    <li>Nhấn vào tab menu <strong>Wedge</strong> → Nhấn nút <strong>Load Wedge</strong>.</li>
                    <li>Chọn Type (Loại nêm):
                        <ul class="list-circle pl-5 mt-1">
                            <li><strong>Angular (Nêm góc):</strong> Chọn khi kiểm tra mối hàn (PA weld inspection). Tạo sóng ngang (Shear Wave). Hầu hết nêm cong cho ống thuộc loại này.</li>
                            <li><strong>Flat (Nêm phẳng/Không đế):</strong> Chỉ dùng cho tôn tấm phẳng, ống cực lớn (>20 inch), đo ăn mòn hoặc kiểm tra vật liệu cơ bản bằng sóng dọc (0 độ).</li>
                        </ul>
                    </li>
                    <li>Chọn đúng model nêm → Nhấn <strong>Load</strong>.</li>
                </ul>
            </div>
        </div>

        <!-- KHỐI 4 -->
        <div id="khoi4" class="mb-10 pt-4 border-t border-slate-200 dark:border-slate-700">
            <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4">KHỐI 4 – THIẾT LẬP SCAN PLAN (GROUP SETUP)</h3>
            <p class="mb-4"><strong>MỤC ĐÍCH:</strong> Thiết lập luật hội tụ (Focal Law), cấu hình Group và chế độ vận hành để tối ưu cho các bước hiệu chuẩn (Calibration).</p>

            <div class="space-y-4">
                <div>
                    <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">4.1. Focal Law Type (Loại luật hội tụ)</h4>
                    <p class="pl-4">Chọn <strong>Sonatest</strong>.</p>
                </div>

                <div>
                    <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">4.2. Scan Type (Kiểu quét)</h4>
                    <p class="pl-4">Lựa chọn: <strong>Linear</strong> hoặc <strong>Sectorial</strong>.</p>
                    <ul class="list-disc pl-8 mt-1">
                        <li><strong>Sectorial Scan (S-scan/Sóng rẽ quạt):</strong> Phổ biến cho kiểm tra mối hàn. Bao phủ dải góc rộng, tăng khả năng phát hiện khuyết tật đa hướng.</li>
                        <li><strong>Linear Scan:</strong> Chùm tia góc cố định, dịch chuyển tuyến tính. Hình ảnh ổn định, dễ định vị chiều sâu/trục quét, phù hợp đánh giá hình học rõ ràng.</li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">4.3. Thiết lập thông số cho Group 1</h4>
                    <ul class="list-disc pl-8 mt-1">
                        <li><strong>Nb of TX elements (Số biến tử phát):</strong> Chọn số lượng biến tử tham gia (Ví dụ: 16/64 biến tử của đầu dò A12).</li>
                        <li><strong>Index (Vị trí):</strong> Nhập <strong>Index Offset</strong> (Khoảng cách từ mặt trước nêm đến tâm mối hàn).</li>
                        <li><strong>Path:</strong> Giữ mặc định 0–100 mm.</li>
                        <li><strong>Resolution:</strong> 1° (Bước nhảy góc quét).</li>
                        <li><strong>Start/Stop Angle:</strong> Nhập dải góc quét mong muốn (Ví dụ: 40° đến 70°).</li>
                        <li><strong>Focal Mode:</strong> Chọn <strong>Natural</strong> (Tự nhiên) – chùm tia phân kỳ tự nhiên, không hội tụ tại 1 điểm, dùng cho thiết lập ban đầu.</li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">4.4. Cài đặt bộ mã hóa (Encoding Setup)</h4>
                    <ul class="list-disc pl-8 mt-1">
                        <li><strong>Thao tác:</strong> Trong phần cài đặt Encoder, chọn chế độ <strong>Time Based</strong> (Theo thời gian).</li>
                        <li><strong>Mục đích:</strong> Để thực hiện Calibration thuận lợi (quét tay tại chỗ).</li>
                        <li><strong>Lưu ý:</strong> Sau khi Calib xong, chuyển sang quét thực tế PHẢI đổi lại sang <strong>Scan Axis Only</strong>.</li>
                    </ul>
                </div>

                <div>
                    <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">4.5. Cài đặt độ lợi khuếch đại ban đầu (dB Gain)</h4>
                    <p class="pl-4">Chỉnh Gain tạm thời lên mức <strong>~40 dB</strong> để tín hiệu đủ lớn, dễ nhìn khi Calib.</p>
                </div>

                <div>
                    <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">4.6. Hoàn tất</h4>
                    <ul class="list-disc pl-8 mt-1">
                        <li>Nhấn <strong>Accept</strong> để máy tính toán luật hội tụ.</li>
                        <li>Nhấn phím cứng <strong>W (Weld overlay)</strong> để hiển thị biên dạng mối hàn trên S-scan.</li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- KHỐI 5 -->
        <div id="khoi5" class="mb-10 pt-4 border-t border-slate-200 dark:border-slate-700">
            <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4">KHỐI 5 – TẠO GROUP 2 (NẾU CẦN)</h3>
            <ul class="list-decimal pl-5 space-y-2">
                <li>Nhấn <strong>Pause</strong> (nút mũi tên xanh bên trái chỗ hiển thị % pin).</li>
                <li>Vào box <strong>Scan</strong> → <strong>Add</strong> (Nếu không Add được là do chưa Pause).</li>
                <li>Chọn <strong>Copy S1 – Sectorial PE</strong> (dòng cuối cùng).</li>
                <li>Điều chỉnh thông số cho Group 2: Gain, Resolution (1°), Start/Stop Angle, First/Last TX element.</li>
                <li>Ấn <strong>Play (▶)</strong> để trở lại màn hình chính.</li>
            </ul>
        </div>

        <!-- KHỐI 6 -->
        <div id="khoi6" class="mb-10 pt-4 border-t border-slate-200 dark:border-slate-700">
            <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4">KHỐI 6 – HIỆU CHUẨN (CALIBRATION) – QUAN TRỌNG NHẤT</h3>
            
            <div class="bg-red-50 dark:bg-red-900/20 p-3 rounded mb-4 border border-red-200 dark:border-red-800">
                <p class="font-bold text-red-800 dark:text-red-300">NGUYÊN TẮC BẮT BUỘC:</p>
                <p>Phải thực hiện theo đúng thứ tự:</p>
                <ol class="list-decimal pl-5 font-semibold text-red-700 dark:text-red-400 mt-1">
                    <li>Velocity (Vận tốc)</li>
                    <li>Wedge Delay (Độ trễ nêm)</li>
                    <li>Sensitivity (Độ nhạy)</li>
                    <li>TCG (Bổ chính tổn hao)</li>
                </ol>
                <p class="mt-2 text-sm">Sử dụng mẫu chuẩn phù hợp (V1/IIW, V2 cho ASME hoặc mẫu khấc cho API...).</p>
                <p class="text-sm">Vào Menu Wizards → chọn Calibration.</p>
            </div>

            <div class="space-y-6">
                <!-- Velocity -->
                <div>
                    <h4 class="font-bold text-lg text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-1 mb-2">1. Hiệu chuẩn Vận tốc (Velocity Calibration)</h4>
                    <p><strong>Mục đích:</strong> Xác định tốc độ âm thanh trong vật liệu để tính đúng khoảng cách. (Chỉ cần calib Group 1 → Group 2 tự nhận).</p>
                    <p><strong>Cài đặt:</strong> Box <strong>Calibrate</strong> → Chọn <strong>Velocity</strong> → Chọn Group (S1) → Type: <strong>Thickness</strong> (hoặc Radius).</p>
                    <p><strong>Thao tác:</strong></p>
                    <ul class="list-disc pl-5 mt-1 mb-2">
                        <li>Đặt đầu dò lên mẫu, tìm tín hiệu xung đáy lặp lại nhiều lần trên A-Scan.</li>
                        <li>Cài đặt cổng (Gates):
                            <br>- Gate 1: Bao trùm đỉnh xung đáy thứ nhất.
                            <br>- Gate 2: Bao trùm đỉnh xung đáy thứ hai.
                        </li>
                        <li>Nhập chiều dày thực tế của mẫu (ví dụ: 25.00 mm).</li>
                        <li>Nhấn <strong>Next</strong> → <strong>Next</strong> đến khi đạt vận tốc chuẩn.</li>
                    </ul>
                    <p class="italic text-gray-600 dark:text-gray-400"><strong>Lưu ý:</strong> Thép Carbon thường khoảng 3230 ~ 3260 m/s. Nếu ra ~5900 m/s (sóng dọc) là sai, cần kiểm tra lại setup.</p>
                </div>

                <!-- Wedge Delay -->
                <div>
                    <h4 class="font-bold text-lg text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-1 mb-2">2. Hiệu chuẩn Độ trễ nêm (Wedge Delay Calibration)</h4>
                    <p class="italic text-sm text-gray-500 mb-2">(Chỉ làm sau khi đã xong Velocity)</p>
                    <p><strong>Mục đích:</strong> Bù trừ thời gian sóng đi trong nêm để tính đúng <strong>Độ sâu</strong> và <strong>Vị trí</strong>.</p>
                    <p class="text-red-600 dark:text-red-400 font-bold mb-1">Hậu quả nếu sai: Sai độ sâu, sai vị trí chân/mặt mối hàn, ACG/TCG sai. Đường cong phải chuẩn, không được hình lưỡi liềm.</p>
                    <p><strong>Cài đặt:</strong> Box <strong>Calibrate</strong> → <strong>Wedge Delay</strong> → Type: <strong>Radius</strong>.</p>
                    <ul class="list-disc pl-5 mt-1 mb-2">
                        <li>Nhập bán kính mẫu (ví dụ: 100.00 mm cho cung R100).</li>
                        <li>Điều chỉnh <strong>Start / Range box</strong> (vùng xanh) rộng rãi bao trùm xung → <strong>Next</strong>.</li>
                        <li>Nhập <strong>Reference Path</strong> (cung mẫu) và <strong>Tolerance Path</strong> (1 mm).</li>
                    </ul>
                    <p><strong>Thao tác:</strong></p>
                    <ul class="list-disc pl-5 mt-1 mb-2">
                        <li>Di chuyển đầu dò <strong>thật chậm, ổn định</strong> để tìm vị trí tín hiệu phản hồi từ cung tròn đạt biên độ cao nhất (đỉnh).</li>
                        <li>Giữ cố định tại đó. Nếu chưa đạt, nhấn <strong>Reset Envelope</strong>. Nếu đạt, nhấn <strong>Apply Wedge Delay (REC)</strong>.</li>
                    </ul>
                    <p><strong>Kiểm tra:</strong> Trên S-scan, tín hiệu xung phải thẳng (không cong), đúng vị trí Index/độ sâu → Nhấn Accept.</p>
                    <p>Lặp lại cho Group 2/3 nếu có.</p>
                </div>

                <!-- Sensitivity -->
                <div>
                    <h4 class="font-bold text-lg text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-1 mb-2">3. Hiệu chuẩn Độ nhạy / ACG (Sensitivity)</h4>
                    <p><strong>Mục đích:</strong> Cân bằng năng lượng giữa các góc quét (ví dụ: góc 45° và 70° phải cho biên độ bằng nhau với cùng 1 khuyết tật).</p>
                    <p><strong>Cài đặt:</strong> Box <strong>Calibrate</strong> → <strong>Sensitivity</strong>. Đặt <strong>Amp Tolerance</strong> ≤ 5%.</p>
                    <p><strong>Thao tác:</strong></p>
                    <ul class="list-disc pl-5 mt-1 mb-2">
                        <li>Dùng lỗ khoan cạnh (SDH) trên khối V1 (ví dụ lỗ 1.5mm sâu 15mm).</li>
                        <li>Kéo đầu dò tới lui thật chậm để tất cả các chùm tia (góc nhỏ → lớn) đều quét qua lỗ và đạt đỉnh.</li>
                        <li>Khi đường bao (envelope) xanh lá cây mượt và đủ góc → Nhấn <strong>Calibrate</strong>.</li>
                        <li>Máy tự động nâng các đỉnh lên mức tham chiếu (80% FSH). Kiểm tra lại thấy chuẩn → Apply Sensitivity → Accept.</li>
                    </ul>
                    <p>Lặp lại cho Group 2/3 nếu có.</p>
                </div>

                <!-- TCG -->
                <div>
                    <h4 class="font-bold text-lg text-slate-800 dark:text-slate-200 border-b border-slate-200 dark:border-slate-700 pb-1 mb-2">4. Hiệu chuẩn TCG (Time Corrected Gain)</h4>
                    <p><strong>Mục đích:</strong> Bù suy giảm năng lượng theo độ sâu (khuyết tật sâu và nông cùng kích thước sẽ có biên độ tương đồng).</p>
                    <p><strong>Cài đặt:</strong> Box <strong>Calibrate</strong> → Curve type: <strong>TCG</strong> → Mode: <strong>Automated</strong>.</p>
                    <p class="ml-4">Amp tolerance: 5–10%; Threshold: 5%.</p>
                    <p><strong>Quy trình:</strong></p>
                    <ul class="list-disc pl-5 mt-1 mb-2">
                        <li><strong>Lỗ 1 (Nông nhất):</strong> Quét lỗ → <strong>REC</strong> → Chạy kiểm tra lại → Nhấn <strong>Next Reflector</strong>.</li>
                        <li><strong>Lỗ 2:</strong> Quét lỗ → <strong>REC</strong> → Chạy kiểm tra lại → Nhấn <strong>Next Reflector</strong>.</li>
                        <li><strong>Lỗ cuối:</strong> Quét lỗ → <strong>REC</strong> → Kiểm tra OK → <strong>KHÔNG</strong> nhấn Next Reflector mà nhấn <strong>Next (>)</strong> → <strong>Accept</strong>.</li>
                    </ul>
                    <p><strong>Xử lý lỗi:</strong> Sai 1 lỗ → <strong>Reset TCG at Reflector</strong>; Sai toàn bộ → <strong>Reset TCG Calib</strong>.</p>
                </div>
            </div>

            <div class="mt-6 bg-slate-100 dark:bg-slate-700 p-4 rounded border border-slate-300 dark:border-slate-600">
                <p class="font-bold uppercase text-slate-800 dark:text-white">YÊU CẦU BẮT BUỘC (FINAL CHECK):</p>
                <p>Trước khi kiểm tra sản phẩm, phải đặt đầu dò lại lên mẫu chuẩn (cung R100, lỗ SDH...). Kiểm tra xem máy có báo đúng Độ sâu (Depth), Khoảng cách bề mặt và Biên độ không. Nếu sai lệch quá mức, phải Calib lại.</p>
            </div>
        </div>

        <!-- KHỐI 7 -->
        <div id="khoi7" class="mb-10 pt-4 border-t border-slate-200 dark:border-slate-700">
            <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4">KHỐI 7 – HOÀN THIỆN THIẾT LẬP (FINAL SETUP)</h3>
            
            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">7.1. Thiết lập bố cục màn hình (Views / Layout)</h4>
                <p>Vào <strong>Menu Layout → Views</strong>.</p>
                <ul class="list-disc pl-5 mt-1">
                    <li><strong>S-scan:</strong> Để kích thước lớn nhất, ưu tiên trung tâm. Để biết vị trí khuyết tật.</li>
                    <li><strong>A-scan:</strong> Hiển thị song song (chia đôi màn hình). Dùng để kiểm tra biên độ, dạng xung.</li>
                    <li><strong>C-scan / Top View:</strong> Khuyến nghị dùng để quan sát dọc chiều dài mối hàn, phát hiện mất tiếp âm.</li>
                </ul>
            </div>

            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">7.2. Cài đặt Cổng tín hiệu (Gate Setup)</h4>
                <p>Vào <strong>Menu Gate</strong>.</p>
                <ul class="list-disc pl-5 mt-1">
                    <li><strong>Cổng 1 (Gate 1 - Bắt khuyết tật):</strong>
                        <ul class="list-circle pl-5">
                            <li>Điều chỉnh bao phủ toàn bộ mối hàn và vùng HAZ.</li>
                            <li><strong>Lưu ý:</strong> Tránh bắt vào nhiễu cố định (nhiễu nêm).</li>
                            <li><strong>Mode:</strong> Chọn <strong>Peak</strong>.</li>
                        </ul>
                    </li>
                    <li><strong>Cổng 2 (Gate 2 - Kiểm tra tiếp âm):</strong> Đặt tại vùng tín hiệu đáy để giám sát mất tiếp âm.</li>
                </ul>
            </div>

            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">7.3. Tối ưu hóa thông số quét</h4>
                <ul class="list-disc pl-5 mt-1">
                    <li><strong>Cắt dải quét (Start/Range Path):</strong> Vào Menu <strong>SCAN</strong>, đặt Start và Range hợp lý để loại bỏ vùng dư thừa, giảm dung lượng file.</li>
                    <li><strong>Tối ưu tốc độ (PRF Control):</strong> Vào Menu <strong>SCAN → PRF control</strong>. Mode: <strong>Manual</strong>. Tăng Max PRF cao (ví dụ ~7000 Hz) để hình ảnh mượt, giảm miss dữ liệu.</li>
                </ul>
            </div>

            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">7.4. Kiểm tra cuối cùng & Cài đặt phụ</h4>
                <ul class="list-disc pl-5 mt-1">
                    <li><strong>Tăng độ nhạy (Scanning Gain):</strong> Vào Menu <strong>SCAN → Gain</strong>. Tăng thêm <strong>+6 dB đến +12 dB</strong> so với mức Gain sau Calib để bù tổn hao bề mặt.</li>
                    <li><strong>Cài đặt Encoder (QUAN TRỌNG):</strong>
                        <ul class="list-circle pl-5">
                            <li>Nhấn <strong>Pause</strong> → <strong>Menu Encoding → Encoding Setup</strong>.</li>
                            <li>Select mode: <strong>Scan Axis Only</strong> (Bắt buộc để ghi dữ liệu kèm vị trí).</li>
                            <li>Scan Enc Resolution: Nhập đúng thông số Encoder.</li>
                        </ul>
                    </li>
                    <li><strong>Chỉnh chiều hướng nêm (Geometry / Skew):</strong>
                        <ul class="list-circle pl-5">
                            <li>Vào <strong>Menu Geometry</strong>. Chỉnh <strong>W1 Index</strong> (chuyển -16mm → +16mm) và <strong>W1 Rotation</strong> (90°/270°) tùy hướng quét.</li>
                            <li>Vào box <strong>View</strong>: Chọn <strong>View Orientation</strong> (Horizontal Left/Right) để S-scan hiển thị đúng hướng mối hàn.</li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>

        <!-- KHỐI 8 -->
        <div id="khoi8" class="mb-10 pt-4 border-t border-slate-200 dark:border-slate-700">
            <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4">KHỐI 8 – QUÉT THỰC TẾ & DỮ LIỆU</h3>
            
            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">8.1. Mở file và Quét</h4>
                <ul class="list-disc pl-5 mt-1">
                    <li><strong>Load Setup:</strong> Chọn <strong>Load Configuration</strong> → <strong>Internal</strong> → Chọn file setup → <strong>Load</strong> → Bấm biểu tượng <strong>ACQ</strong>.</li>
                    <li><strong>Quét:</strong> Nhấn <strong>RECORD (●)</strong> để bắt đầu → Quét xong nhấn <strong>STOP (■)</strong> để lưu.</li>
                    <li><strong>Lưu:</strong> Nhấn nút <strong>Save</strong> → Nhập tên file.
                        <ul class="list-circle pl-5">
                            <li>Chọn <strong>Open recorded utdata</strong> để xem lại.</li>
                            <li>Hoặc <strong>Stay in current utcfg</strong> để quét tiếp.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">8.2. Load Data để đọc (Xem lại)</h4>
                <p>Nhấn biểu tượng <strong>Open</strong> → <strong>Discard and Load New</strong> → <strong>Load data</strong> → <strong>Internal</strong> → Chọn file .utdata → <strong>Load</strong>.</p>
            </div>

            <div class="mb-4">
                <h4 class="font-bold text-base text-slate-700 dark:text-slate-300">8.3. Copy Data/Setup sang USB</h4>
                <p>Cắm USB. Nhấn <strong>Open</strong> → <strong>Discard and Load New</strong> → <strong>Manager Files</strong>.</p>
                <ul class="list-disc pl-5 mt-1">
                    <li>Chọn <strong>Internal</strong>.</li>
                    <li>Chọn loại file (.utcfg hoặc .utdata).</li>
                    <li>Chọn file cần copy → Bấm <strong>2 lần nút tròn giữa (O)</strong> → <strong>Copy to</strong> → <strong>USB</strong> → Xác nhận.</li>
                </ul>
            </div>
        </div>

    </div>
`;