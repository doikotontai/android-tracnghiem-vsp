const DATA_KHOI_8 = `
    <div class="manual-section text-slate-800 dark:text-slate-200">
        <h3 class="text-blue-600 dark:text-blue-400 font-bold text-xl uppercase mb-4 mt-2 border-b border-blue-200 dark:border-blue-800 pb-2">
            KHỐI 8 – QUÉT THỰC TẾ & DỮ LIỆU
        </h3>

        <div class="space-y-6 text-sm">
            <!-- 8.1 -->
            <div class="border rounded-lg p-4 border-slate-200 dark:border-slate-700">
                <h4 class="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">8.1. Mở file và Quét</h4>
                <ul class="list-disc pl-5 space-y-2">
                    <li><strong>Load Setup:</strong> Chọn <strong>Load Configuration</strong> → <strong>Internal</strong> → Chọn file setup → <strong>Load</strong> → Bấm biểu tượng <strong>ACQ</strong>.</li>
                    <li><strong>Quét:</strong> Nhấn <strong>RECORD (●)</strong> để bắt đầu → Quét xong nhấn <strong>STOP (■)</strong> để lưu.</li>
                    <li><strong>Lưu:</strong> Nhấn nút <strong>Save</strong> → Nhập tên file.
                        <ul class="list-circle pl-5 mt-1 text-slate-600 dark:text-slate-400">
                            <li>Chọn <strong>Open recorded utdata</strong> để xem lại.</li>
                            <li>Hoặc <strong>Stay in current utcfg</strong> để quét tiếp.</li>
                        </ul>
                    </li>
                </ul>
            </div>

            <!-- 8.2 -->
            <div class="border rounded-lg p-4 border-slate-200 dark:border-slate-700">
                <h4 class="font-bold text-lg text-blue-600 dark:text-blue-400 mb-2">8.2. Load Data để đọc (Xem lại)</h4>
                <p>Nhấn biểu tượng <strong>Open</strong> → <strong>Discard and Load New</strong> → <strong>Load data</strong> → <strong>Internal</strong> → Chọn file .utdata → <strong>Load</strong>.</p>
            </div>

            <!-- 8.3 -->
            <div class="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 border border-indigo-200 dark:border-indigo-800">
                <h4 class="font-bold text-lg text-indigo-700 dark:text-indigo-400 mb-2">8.3. Copy Data/Setup sang USB</h4>
                <ul class="list-decimal pl-5 space-y-2 text-indigo-900 dark:text-indigo-200">
                    <li>Cắm USB. Nhấn <strong>Open</strong> → <strong>Discard and Load New</strong> → <strong>Manager Files</strong>.</li>
                    <li>Chọn <strong>Internal</strong>.</li>
                    <li>Chọn loại file (.utcfg hoặc .utdata).</li>
                    <li>Chọn file cần copy → Bấm <strong>2 lần nút tròn giữa (O)</strong> → <strong>Copy to</strong> → <strong>USB</strong> → Xác nhận.</li>
                </ul>
            </div>
        </div>
    </div>
`;