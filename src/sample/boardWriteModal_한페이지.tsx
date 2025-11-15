import React, { useState, useRef, useEffect } from 'react';

// 기본 예제: 글쓰기 버튼을 누르면 입력 레이어(모달)가 뜨는 컴포넌트
// Tailwind CSS를 사용한 스타일 (프로젝트에 Tailwind 설정이 되어 있어야 합니다)

export default function BoardWriteModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  // 클릭이 모달 바깥이면 닫기
  useEffect(() => {
    function handleClickOutside(e) {
      if (isOpen && modalRef.current && !modalRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const openModal = () => {
    setTitle('');
    setContent('');
    setIsOpen(true);
    // 포커스 제어는 필요하면 추가
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }
    if (!content.trim()) {
      alert('내용을 입력해주세요.');
      return;
    }

    setSubmitting(true);
    try {
      // 여기서 실제 API 호출을 하면 됩니다. 예:
      // await fetch('/api/posts', { method: 'POST', body: JSON.stringify({ title, content }) })
      await new Promise((r) => setTimeout(r, 800)); // 모의 대기
      // 성공 처리 예: 목록 리로드, 토스트, 모달 닫기
      alert('저장되었습니다.');
      setIsOpen(false);
    } catch (err) {
      console.error(err);
      alert('저장 중 오류가 발생했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4">
      {/* 글쓰기 버튼 */}
      <button
        onClick={openModal}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow"
      >
        글쓰기
      </button>

      {/* 모달 백드롭 */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          {/* 모달 박스 */}
          <div
            ref={modalRef}
            className="relative z-50 w-full max-w-2xl mx-4 bg-white rounded-lg shadow-lg overflow-hidden"
            role="dialog"
            aria-modal="true"
          >
            <form onSubmit={handleSubmit} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold">글쓰기</h3>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="text-gray-500 hover:text-gray-700"
                  aria-label="닫기"
                >
                  ✕
                </button>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">제목</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="제목을 입력하세요"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">내용</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full border border-gray-300 rounded px-3 py-2 h-40 resize-y focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="내용을 입력하세요"
                />
              </div>

              <div className="flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 rounded-md border border-gray-300 bg-white hover:bg-gray-50"
                >
                  취소
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
                >
                  {submitting ? '저장 중...' : '저장'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
