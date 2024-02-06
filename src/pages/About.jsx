import React from 'react';

export default function About() {
    return (
        <div>
            <input
                type="text"
                value=""
                placeholder="입력하세요"
            />
            <h1>About Us~!</h1>
            <h3>라우터에 여러 개의 경로를 등록하고, 각 경로에 해당하는 컴포넌트를 Outlet에 렌더링할 수 있습니다.</h3>
            <p>이를 통해 동적으로 페이지를 구성하고, 사용자의 요청에 따라 적절한 컴포넌트를 렌더링할 수 있습니다.</p>
        </div>
    );
}
