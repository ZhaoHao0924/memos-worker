/**
 * Memos Worker - Internationalization (i18n) Module
 * Supports Chinese (zh) and English (en)
 * Usage:
 *   i18n.t('key')           - get translated string
 *   i18n.apply()            - apply translations to [data-i18n] elements
 *   i18n.setLang('zh')      - switch language
 *   i18n.getCurrentLang()   - get current language
 */
const i18n = (function () {
	const STORAGE_KEY = 'memos-lang';

	const translations = {
		en: {
			// --- Common ---
			'common.appName': 'Memos',
			'common.save': 'Save',
			'common.cancel': 'Cancel',
			'common.delete': 'Delete',
			'common.close': 'Close',
			'common.ok': 'OK',
			'common.copy': 'Copy',
			'common.copied': 'Copied!',
			'common.restore': 'Restore',
			'common.clear': 'Clear',
			'common.loading': 'Loading...',
			'common.loadingMore': 'Loading more...',
			'common.saving': 'Saving...',
			'common.error': 'Error',
			'common.failed': 'Failed',
			'common.merge': 'Merge',
			'common.language': 'Language',
			'common.copyCode': 'Copy code',
			'common.copyFailed': 'Copy failed!',

			// --- Login ---
			'login.username': 'Username',
			'login.password': 'Password',
			'login.button': 'Login',
			'login.error': 'Invalid username or password',

			// --- Stats ---
			'stats.days': 'Days',
			'stats.memos': 'Memos',
			'stats.tags': 'Tags',

			// --- Search ---
			'search.placeholder': 'Search...',
			'search.clear': 'Clear',

			// --- Tags ---
			'tags.title': 'Tags',
			'tags.clearFilter': 'Clear tag filter',
			'tags.noTagsYet': 'No tags yet',
			'tags.noTagsFound': 'No tags found',
			'tags.noTagsYetDot': 'No tags yet.',

			// --- Timeline ---
			'timeline.title': 'Timeline',
			'timeline.showAll': 'Show All Notes',

			// --- Header ---
			'header.refresh': 'Refresh',
			'header.waterfall': 'Toggle waterfall mode',
			'header.wideMode': 'Toggle wide mode',
			'header.more': 'More options',
			'header.settings': 'Settings',
			'header.themeToggle': 'Toggle Theme',
			'header.themeColor': 'Theme Color',
			'header.logout': 'Logout',

			// --- Editor ---
			'editor.placeholder': 'Write in Markdown...',
			'editor.insertTag': 'Insert tag (#)',
			'editor.tagSearch': 'Search or select tag...',
			'editor.insertImage': 'Insert image',
			'editor.selectFiles': 'Select files',
			'editor.fullscreen': 'Fullscreen Editor',
			'editor.togglePreview': 'Toggle Preview',
			'editor.toggleSplit': 'Toggle Split View',
			'editor.save': 'Save',

			// --- Right Sidebar ---
			'sidebar.home': 'Home',
			'sidebar.favorites': 'Favorites',
			'sidebar.archive': 'Archive',
			'sidebar.files': 'Files',
			'sidebar.docs': 'Docs',
			'sidebar.openDocs': 'Open Docs',

			// --- Bookmarks ---
			'bookmarks.title': 'Bookmarks',
			'bookmarks.add': 'Save bookmark',
			'bookmarks.addTitle': 'Save Bookmark',
			'bookmarks.editTitle': 'Edit Bookmark',
			'bookmarks.url': 'URL',
			'bookmarks.urlPlaceholder': 'https://example.com',
			'bookmarks.titleLabel': 'Title',
			'bookmarks.titlePlaceholder': 'Optional title',
			'bookmarks.description': 'Notes',
			'bookmarks.descriptionPlaceholder': 'Optional notes',
			'bookmarks.search': 'Search bookmarks...',
			'bookmarks.empty': 'No bookmarks yet.',
			'bookmarks.noResults': 'No bookmarks match your search.',
			'bookmarks.open': 'Open bookmark',
			'bookmarks.edit': 'Edit bookmark',
			'bookmarks.delete': 'Delete bookmark',
			'bookmarks.deleteConfirm': 'Delete this bookmark?',
			'bookmarks.saved': 'Bookmark saved.',
			'bookmarks.updated': 'Bookmark updated.',
			'bookmarks.deleted': 'Bookmark deleted.',
			'bookmarks.loadFailed': 'Failed to load bookmarks.',
			'bookmarks.saveFailed': 'Failed to save bookmark.',

			// --- Note Actions ---
			'note.favorite': 'Favorite',
			'note.unfavorite': 'Unfavorite',
			'note.pin': 'Pin',
			'note.unpin': 'Unpin',
			'note.archive': 'Archive',
			'note.unarchive': 'Unarchive',
			'note.share': 'Share',
			'note.edit': 'Edit',
			'note.moreActions': 'More actions',
			'note.addFiles': 'Add files',
			'note.fullscreenEdit': 'Fullscreen Edit',
			'note.keepTime': 'Keep Time',
			'note.keepTimeTitle': "If checked, the note's timestamp will not be updated upon saving.",
			'note.showMore': 'Show more',
			'note.collapse': 'Collapse',
			'note.placeholder': 'Memos here...',
			'note.deleteNote': 'Delete Note',
			'note.pinned': 'Pinned',
			'note.lock': 'Lock',
			'note.unlock': 'Unlock',
			'note.locked': 'Locked note',
			'note.lockedDescription': 'The content and attachments are hidden.',
			'note.unlockToView': 'Enter password to view',
			'note.lockOnCreate': 'Lock',
			'note.lockOnCreateTitle': 'Lock this note after publishing',

			// --- Attachments Viewer ---
			'attachments.title': 'Files',
			'attachments.all': '✨ All',
			'attachments.images': '🏞️ Images',
			'attachments.videos': '🎬 Videos',
			'attachments.files': '📄 Files',
			'attachments.loadFailed': 'Failed to load attachments.',
			'attachments.empty': 'No items to display.',
			'attachments.getPublicLink': 'Get public link',
			'attachments.deleteFile': 'Delete file',
			'attachments.imageAlt': 'Image from note {noteId}',
			'attachments.videoAlt': 'Video from note {noteId}',

			// --- Color Picker ---
			'color.custom': 'Custom',

			// --- Modals ---
			'modal.ok': 'OK',
			'modal.cancel': 'Cancel',
			'modal.delete': 'Delete',
			'modal.enterPassword': 'Enter your login password',
			'merge.separator': 'Add separator line (---) between notes',
			'merge.button': 'Merge',
			'merge.confirmTitle': 'Merge Notes',
			'merge.success': 'Notes merged successfully!',

			// --- Fullscreen Editor ---
			'fs.fontSize': 'Size',
			'fs.fontColor': 'Font Color',
			'fs.bold': 'Bold (Ctrl+B)',
			'fs.underline': 'Underline',
			'fs.italic': 'Italic (Ctrl+I)',
			'fs.strike': 'Strikethrough',
			'fs.link': 'Insert Link (Ctrl+K)',
			'fs.image': 'Insert Image',
			'fs.blockquote': 'Blockquote',
			'fs.ulist': 'Unordered List',
			'fs.code': 'Insert Code Block',
			'fs.keepTime': 'Keep Time',
			'fs.keepTimeTitle': "If unchecked, the note's timestamp will be updated upon saving.",
			'fs.splitView': 'Split View',
			'fs.preview': 'Preview',
			'fs.save': 'Save',
			'fs.cancel': 'Cancel',

			// --- Back to top ---
			'backToTop': 'Back to top',

			// --- Settings ---
			'settings.title': 'Settings',
			'settings.interfaceVisibility': 'Interface Visibility',
			'settings.showSearch': 'Show Search',
			'settings.showStats': 'Show Stats',
			'settings.showCalendar': 'Show Calendar',
			'settings.showHeatmap': 'Show Heatmap',
			'settings.showTags': 'Show Tags',
			'settings.showTimeline': 'Show Timeline',
			'settings.showRightSidebar': 'Show Right Sidebar',
			'settings.enableDateGrouping': 'Enable Date Grouping',
			'settings.enableContentTruncation': 'Enable Content Truncation',
			'settings.featureVisibility': 'Feature Visibility',
			'settings.showFavorites': 'Show Favorites',
			'settings.showArchive': 'Show Archive',
			'settings.enablePinning': 'Enable Pinning',
			'settings.enableSharing': 'Enable Sharing',
			'settings.showDocs': 'Show Docs Link',
			'settings.showBookmarks': 'Show Bookmarks',
			'settings.background': 'Background',
			'settings.bgImageUrl': 'Image URL',
			'settings.bgImageUrlPlaceholder': 'Enter image URL...',
			'settings.bgUpload': 'Or Upload',
			'settings.glassEffect': 'Glass Effect',
			'settings.bgOpacity': 'Background Opacity',
			'settings.restoreBg': 'Restore',
			'settings.clearBg': 'Clear',
			'settings.surface': 'Surface',
			'settings.baseColor': 'Base Color',
			'settings.surfaceOpacity': 'Opacity',
			'settings.restoreDefaults': 'Restore Defaults',
			'settings.imagePasteUpload': 'Image Paste Upload',
			'settings.uploadLocal': 'Local (via Worker & R2)',
			'settings.uploadImgur': 'Imgur (Requires Client ID)',
			'settings.imgurClientId': 'Imgur Client ID',
			'settings.imgurClientIdPlaceholder': 'Enter your Imgur Client ID...',
			'settings.telegramProxy': 'Telegram Proxy',
			'settings.enableTelegramProxy': 'Enable Video&File Proxy',
			'settings.waterfallMode': 'Waterfall Mode',
			'settings.hideEditorInWaterfall': 'Hide Editor in Waterfall Mode',
			'settings.cardWidth': 'Card Width (px)',

			// --- Share Modal ---
			'shareModal.title': 'Share Memo',
			'shareModal.generating': 'Generating link...',
			'shareModal.description': 'Anyone with these public links can view this memo.',
			'shareModal.displayLink': 'Display Link',
			'shareModal.rawLink': 'Raw Content Link',
			'shareModal.expiresIn': 'Expires in:',
			'shareModal.close': 'Close',
			'shareModal.updated': 'Updated!',
			'shareModal.updating': 'Updating...',
			'shareModal.revoking': 'Revoking...',
			'shareModal.revoked': 'Sharing has been successfully revoked.',
			'shareModal.copyFailed': 'Failed to copy link.',

			// --- Expiration options ---
			'expiration.1hour': '1 Hour',
			'expiration.4hour': '4 Hour',
			'expiration.12hours': '12 Hours',
			'expiration.1day': '1 Day',
			'expiration.7days': '7 Days',
			'expiration.never': 'Never',
			'expiration.revoke': 'Revoke Now (Expire Immediately)',

			// --- Toast / Alert messages ---
			'toast.fileRemoved': 'File and empty note removed.',
			'toast.fileDeleted': 'File deleted successfully.',
			'toast.mergeSuccess': 'Notes merged successfully!',
			'alert.imageUploadFailed': 'Image upload failed',
			'alert.settingsSaveError': 'Error saving settings',
			'alert.shareRevoked': 'Sharing has been successfully revoked.',
			'alert.revokeConfirm': 'Are you sure you want to revoke the public links immediately? This action cannot be undone.',
			'alert.deleteNoteConfirm': 'Are you sure you want to delete this note?',
			'alert.deleteFileConfirm': 'Are you sure you want to permanently delete this file? This action cannot be undone.',
			'alert.contentRequired': 'Content or a file is required.',
			'alert.originalNotFound': 'Error: Original note element not found.',
			'alert.initFailed': 'Failed to initialize the application. Please check your connection and try again.',
			'alert.loadFailed': 'Failed to load: {message}',
			'alert.heatmapLoadFailed': 'Could not load activity data.',
			'alert.timelineLoadFailed': 'Error loading timeline.',
			'alert.tagsLoadFailed': 'Error loading tags.',
			'alert.invalidPassword': 'Invalid password.',
			'alert.lockedNoteHidden': 'This note is locked.',

			// --- Empty states ---
			'empty.nothing': 'Nothing here yet.',
			'empty.noMore': 'No more notes.',

			// --- Calendar ---
			'calendar.prev': 'Previous month',
			'calendar.next': 'Next month',
			'heatmap.oneNote': '1 note',
			'heatmap.notes': '{count} notes',
			'heatmap.onDate': '{countText} on {date}',
			'timeline.filter': 'Filter notes for {label}',

			// --- Docs page ---
			'docs.title': 'Docs',
			'docs.createDoc': 'Create Doc',
			'docs.createFolder': 'Create Folder',
			'docs.outline': 'Outline',
			'docs.rename': 'Rename',
			'docs.move': 'Move (Drag & Drop)',
			'docs.delete': 'Delete',
			'docs.saved': 'Saved',
			'docs.saving': 'Saving...',
			'docs.error': 'Error',
			'docs.toggleTheme': 'Toggle Theme',
			'docs.backToHome': 'Back to Home',
			'docs.noHeadings': 'No headings found.',
			'docs.noDocs': 'Create a new note to get started.',
			'docs.loadFailed': 'Load failed',
			'docs.allDeleted': 'All docs have been deleted',
			'docs.deleteConfirm': 'delete "{title}"?',
			'docs.newName': 'New name:',
			'docs.newDocName': 'New doc name:',
			'docs.newFolderName': 'New folder name:',
			'docs.uploadingImage': '[Uploading image...]',
			'docs.imageUploadFailed': '[Image upload failed]',
			'docs.unknownApiError': 'An unknown API error occurred',

			// --- Share page ---
			'sharePage.title': 'Shared Memo',
			'sharePage.toggleTheme': 'Toggle Theme',
			'sharePage.noShareId': 'No share ID found in URL parameters.',
			'sharePage.loadFailed': 'Failed to load note',
			'sharePage.error': 'Error',
			'sharePage.bytes': '0 Bytes',
		},

		zh: {
			// --- Common ---
			'common.appName': 'Memos',
			'common.save': '保存',
			'common.cancel': '取消',
			'common.delete': '删除',
			'common.close': '关闭',
			'common.ok': '确定',
			'common.copy': '复制',
			'common.copied': '已复制！',
			'common.restore': '恢复',
			'common.clear': '清除',
			'common.loading': '加载中...',
			'common.loadingMore': '加载更多...',
			'common.saving': '保存中...',
			'common.error': '错误',
			'common.failed': '失败',
			'common.merge': '合并',
			'common.language': '语言',
			'common.copyCode': '复制代码',
			'common.copyFailed': '复制失败！',

			// --- Login ---
			'login.username': '用户名',
			'login.password': '密码',
			'login.button': '登录',
			'login.error': '用户名或密码错误',

			// --- Stats ---
			'stats.days': '天数',
			'stats.memos': '笔记',
			'stats.tags': '标签',

			// --- Search ---
			'search.placeholder': '搜索...',
			'search.clear': '清除',

			// --- Tags ---
			'tags.title': '标签',
			'tags.clearFilter': '清除标签筛选',
			'tags.noTagsYet': '暂无标签',
			'tags.noTagsFound': '未找到标签',
			'tags.noTagsYetDot': '暂无标签。',

			// --- Timeline ---
			'timeline.title': '时间线',
			'timeline.showAll': '显示所有笔记',

			// --- Header ---
			'header.refresh': '刷新',
			'header.waterfall': '切换瀑布流模式',
			'header.wideMode': '切换宽屏模式',
			'header.more': '更多选项',
			'header.settings': '设置',
			'header.themeToggle': '切换主题',
			'header.themeColor': '主题颜色',
			'header.logout': '退出登录',

			// --- Editor ---
			'editor.placeholder': '使用 Markdown 写作...',
			'editor.insertTag': '插入标签 (#)',
			'editor.tagSearch': '搜索或选择标签...',
			'editor.insertImage': '插入图片',
			'editor.selectFiles': '选择文件',
			'editor.fullscreen': '全屏编辑',
			'editor.togglePreview': '切换预览',
			'editor.toggleSplit': '切换分屏视图',
			'editor.save': '保存',

			// --- Right Sidebar ---
			'sidebar.home': '首页',
			'sidebar.favorites': '收藏',
			'sidebar.archive': '归档',
			'sidebar.files': '文件',
			'sidebar.docs': '文档',
			'sidebar.openDocs': '打开文档',

			// --- Bookmarks ---
			'bookmarks.title': '书签',
			'bookmarks.add': '保存书签',
			'bookmarks.addTitle': '保存书签',
			'bookmarks.editTitle': '编辑书签',
			'bookmarks.url': '链接',
			'bookmarks.urlPlaceholder': 'https://example.com',
			'bookmarks.titleLabel': '标题',
			'bookmarks.titlePlaceholder': '可选标题',
			'bookmarks.description': '备注',
			'bookmarks.descriptionPlaceholder': '可选备注',
			'bookmarks.search': '搜索书签...',
			'bookmarks.empty': '还没有书签。',
			'bookmarks.noResults': '没有匹配的书签。',
			'bookmarks.open': '打开书签',
			'bookmarks.edit': '编辑书签',
			'bookmarks.delete': '删除书签',
			'bookmarks.deleteConfirm': '确定要删除这个书签吗？',
			'bookmarks.saved': '书签已保存。',
			'bookmarks.updated': '书签已更新。',
			'bookmarks.deleted': '书签已删除。',
			'bookmarks.loadFailed': '书签加载失败。',
			'bookmarks.saveFailed': '书签保存失败。',

			// --- Note Actions ---
			'note.favorite': '收藏',
			'note.unfavorite': '取消收藏',
			'note.pin': '置顶',
			'note.unpin': '取消置顶',
			'note.archive': '归档',
			'note.unarchive': '取消归档',
			'note.share': '分享',
			'note.edit': '编辑',
			'note.moreActions': '更多操作',
			'note.addFiles': '添加文件',
			'note.fullscreenEdit': '全屏编辑',
			'note.keepTime': '保持时间',
			'note.keepTimeTitle': '勾选后，保存时不会更新笔记时间戳。',
			'note.showMore': '展开更多',
			'note.collapse': '收起',
			'note.placeholder': '在这里写笔记...',
			'note.deleteNote': '删除笔记',
			'note.pinned': '已置顶',
			'note.lock': '加锁',
			'note.unlock': '解锁',
			'note.locked': '已加锁笔记',
			'note.lockedDescription': '内容和附件已隐藏。',
			'note.unlockToView': '输入密码查看',
			'note.lockOnCreate': '加锁',
			'note.lockOnCreateTitle': '发布后加锁隐藏这条笔记',

			// --- Attachments Viewer ---
			'attachments.title': '文件',
			'attachments.all': '✨ 全部',
			'attachments.images': '🏞️ 图片',
			'attachments.videos': '🎬 视频',
			'attachments.files': '📄 文件',
			'attachments.loadFailed': '附件加载失败。',
			'attachments.empty': '暂无可显示项目。',
			'attachments.getPublicLink': '获取公开链接',
			'attachments.deleteFile': '删除文件',
			'attachments.imageAlt': '笔记 {noteId} 中的图片',
			'attachments.videoAlt': '笔记 {noteId} 中的视频',

			// --- Color Picker ---
			'color.custom': '自定义',

			// --- Modals ---
			'modal.ok': '确定',
			'modal.cancel': '取消',
			'modal.delete': '删除',
			'modal.enterPassword': '请输入当前登录密码',
			'merge.separator': '在笔记之间添加分隔线 (---)',
			'merge.button': '合并',
			'merge.confirmTitle': '合并笔记',
			'merge.success': '笔记合并成功！',

			// --- Fullscreen Editor ---
			'fs.fontSize': '大小',
			'fs.fontColor': '字体颜色',
			'fs.bold': '粗体 (Ctrl+B)',
			'fs.underline': '下划线',
			'fs.italic': '斜体 (Ctrl+I)',
			'fs.strike': '删除线',
			'fs.link': '插入链接 (Ctrl+K)',
			'fs.image': '插入图片',
			'fs.blockquote': '引用',
			'fs.ulist': '无序列表',
			'fs.code': '插入代码块',
			'fs.keepTime': '保持时间',
			'fs.keepTimeTitle': '取消勾选后，保存时笔记的时间戳将更新为当前时间。',
			'fs.splitView': '分屏视图',
			'fs.preview': '预览',
			'fs.save': '保存',
			'fs.cancel': '取消',

			// --- Back to top ---
			'backToTop': '回到顶部',

			// --- Settings ---
			'settings.title': '设置',
			'settings.interfaceVisibility': '界面可见性',
			'settings.showSearch': '显示搜索',
			'settings.showStats': '显示统计',
			'settings.showCalendar': '显示日历',
			'settings.showHeatmap': '显示热力图',
			'settings.showTags': '显示标签',
			'settings.showTimeline': '显示时间线',
			'settings.showRightSidebar': '显示右侧栏',
			'settings.enableDateGrouping': '启用日期分组',
			'settings.enableContentTruncation': '启用内容截断',
			'settings.featureVisibility': '功能可见性',
			'settings.showFavorites': '显示收藏',
			'settings.showArchive': '显示归档',
			'settings.enablePinning': '启用置顶',
			'settings.enableSharing': '启用分享',
			'settings.showDocs': '显示文档链接',
			'settings.showBookmarks': '显示书签',
			'settings.background': '背景',
			'settings.bgImageUrl': '图片链接',
			'settings.bgImageUrlPlaceholder': '输入图片链接...',
			'settings.bgUpload': '或上传',
			'settings.glassEffect': '毛玻璃效果',
			'settings.bgOpacity': '背景不透明度',
			'settings.restoreBg': '恢复',
			'settings.clearBg': '清除',
			'settings.surface': '表面',
			'settings.baseColor': '基础颜色',
			'settings.surfaceOpacity': '不透明度',
			'settings.restoreDefaults': '恢复默认',
			'settings.imagePasteUpload': '图片粘贴上传',
			'settings.uploadLocal': '本地（通过 Worker 和 R2）',
			'settings.uploadImgur': 'Imgur（需要 Client ID）',
			'settings.imgurClientId': 'Imgur Client ID',
			'settings.imgurClientIdPlaceholder': '输入你的 Imgur Client ID...',
			'settings.telegramProxy': 'Telegram 代理',
			'settings.enableTelegramProxy': '启用视频和文件代理',
			'settings.waterfallMode': '瀑布流模式',
			'settings.hideEditorInWaterfall': '在瀑布流模式下隐藏编辑器',
			'settings.cardWidth': '卡片宽度 (px)',

			// --- Share Modal ---
			'shareModal.title': '分享笔记',
			'shareModal.generating': '正在生成链接...',
			'shareModal.description': '任何拥有这些公开链接的人都可以查看此笔记。',
			'shareModal.displayLink': '展示链接',
			'shareModal.rawLink': '原始内容链接',
			'shareModal.expiresIn': '过期时间：',
			'shareModal.close': '关闭',
			'shareModal.updated': '已更新！',
			'shareModal.updating': '更新中...',
			'shareModal.revoking': '撤销中...',
			'shareModal.revoked': '分享已成功撤销。',
			'shareModal.copyFailed': '复制链接失败。',

			// --- Expiration options ---
			'expiration.1hour': '1 小时',
			'expiration.4hour': '4 小时',
			'expiration.12hours': '12 小时',
			'expiration.1day': '1 天',
			'expiration.7days': '7 天',
			'expiration.never': '永不',
			'expiration.revoke': '立即撤销（立即过期）',

			// --- Toast / Alert messages ---
			'toast.fileRemoved': '文件和空笔记已移除。',
			'toast.fileDeleted': '文件删除成功。',
			'toast.mergeSuccess': '笔记合并成功！',
			'alert.imageUploadFailed': '图片上传失败',
			'alert.settingsSaveError': '保存设置出错',
			'alert.shareRevoked': '分享已成功撤销。',
			'alert.revokeConfirm': '确定要立即撤销公开链接吗？此操作不可撤销。',
			'alert.deleteNoteConfirm': '确定要删除此笔记吗？',
			'alert.deleteFileConfirm': '确定要永久删除此文件吗？此操作不可撤销。',
			'alert.contentRequired': '内容或文件为必填项。',
			'alert.originalNotFound': '错误：找不到原始笔记元素。',
			'alert.initFailed': '应用初始化失败，请检查网络连接后重试。',
			'alert.loadFailed': '加载失败：{message}',
			'alert.heatmapLoadFailed': '无法加载活动数据。',
			'alert.timelineLoadFailed': '时间线加载失败。',
			'alert.tagsLoadFailed': '标签加载失败。',
			'alert.invalidPassword': '密码错误。',
			'alert.lockedNoteHidden': '这条笔记已加锁。',

			// --- Empty states ---
			'empty.nothing': '这里还什么都没有。',
			'empty.noMore': '没有更多笔记了。',

			// --- Calendar ---
			'calendar.prev': '上个月',
			'calendar.next': '下个月',
			'heatmap.oneNote': '1 条笔记',
			'heatmap.notes': '{count} 条笔记',
			'heatmap.onDate': '{date} 有 {countText}',
			'timeline.filter': '筛选 {label} 的笔记',

			// --- Docs page ---
			'docs.title': '文档',
			'docs.createDoc': '创建文档',
			'docs.createFolder': '创建文件夹',
			'docs.outline': '大纲',
			'docs.rename': '重命名',
			'docs.move': '移动（拖放）',
			'docs.delete': '删除',
			'docs.saved': '已保存',
			'docs.saving': '保存中...',
			'docs.error': '错误',
			'docs.toggleTheme': '切换主题',
			'docs.backToHome': '返回首页',
			'docs.noHeadings': '未找到标题。',
			'docs.noDocs': '创建一个新笔记开始吧。',
			'docs.loadFailed': '加载失败',
			'docs.allDeleted': '所有文档已删除',
			'docs.deleteConfirm': '删除 "{title}"？',
			'docs.newName': '新名称：',
			'docs.newDocName': '新文档名称：',
			'docs.newFolderName': '新文件夹名称：',
			'docs.uploadingImage': '[图片上传中...]',
			'docs.imageUploadFailed': '[图片上传失败]',
			'docs.unknownApiError': '发生未知 API 错误',

			// --- Share page ---
			'sharePage.title': '分享的笔记',
			'sharePage.toggleTheme': '切换主题',
			'sharePage.noShareId': 'URL 参数中未找到分享 ID。',
			'sharePage.loadFailed': '加载笔记失败',
			'sharePage.error': '错误',
			'sharePage.bytes': '0 字节',
		}
	};

	const dayNames = {
		en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		zh: ['日', '一', '二', '三', '四', '五', '六']
	};

	let currentLang = 'en';

	function detectLang() {
		const saved = localStorage.getItem(STORAGE_KEY);
		if (saved && (saved === 'zh' || saved === 'en')) return saved;
		const browserLang = navigator.language || navigator.userLanguage || 'en';
		return browserLang.startsWith('zh') ? 'zh' : 'en';
	}

	function getCurrentLang() {
		return currentLang;
	}

	function setLang(lang) {
		if (lang !== 'zh' && lang !== 'en') return;
		currentLang = lang;
		localStorage.setItem(STORAGE_KEY, lang);
		document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
		apply();
		// Dispatch event so other scripts can react
		document.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
	}

	function toggleLang() {
		setLang(currentLang === 'zh' ? 'en' : 'zh');
	}

	function t(key, params) {
		const dict = translations[currentLang] || translations.en;
		let str = dict[key];
		if (str === undefined) {
			// Fallback to English
			str = translations.en[key];
		}
		if (str === undefined) return key;
		if (params) {
			for (const [k, v] of Object.entries(params)) {
				str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
			}
		}
		return str;
	}

	function apply() {
		// Apply text content
		document.querySelectorAll('[data-i18n]').forEach(el => {
			const key = el.getAttribute('data-i18n');
			if (key) el.textContent = t(key);
		});
		// Apply placeholders
		document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
			const key = el.getAttribute('data-i18n-placeholder');
			if (key) el.placeholder = t(key);
		});
		// Apply titles
		document.querySelectorAll('[data-i18n-title]').forEach(el => {
			const key = el.getAttribute('data-i18n-title');
			if (key) el.title = t(key);
		});
		// Apply innerHTML (for elements with mixed content)
		document.querySelectorAll('[data-i18n-html]').forEach(el => {
			const key = el.getAttribute('data-i18n-html');
			if (key) el.innerHTML = t(key);
		});
		// Update document title
		document.title = t('common.appName') || 'Memos';
	}

	function getDayNames() {
		return dayNames[currentLang] || dayNames.en;
	}

	function getLocale() {
		return currentLang === 'zh' ? 'zh-CN' : 'en-US';
	}

	// Initialize on script load
	currentLang = detectLang();
	document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';

	return {
		t,
		apply,
		setLang,
		toggleLang,
		getCurrentLang,
		getDayNames,
		getLocale,
	};
})();
