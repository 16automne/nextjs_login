'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

function Header() {

  // 1. GNB 전체 열림/닫힘 상태
  const [isGnbOpen, setIsGnbOpen] = useState(false);
  
  // 2. 서브메뉴 개별 열림 상태 (여러 개를 열 수 있도록 객체나 숫자로 관리)
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleSubMenu = (menuName) => {
    // 이미 열려있는 메뉴를 다시 누르면 닫고, 아니면 해당 메뉴를 염
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
  };

  return (
    <header>
      <h1>
        <button>
          <i className="fas fa-user"></i>
        </button>
        <Link href='/'>
          <Image
          src='/images/pascucci_logo.png'
          alt='상단로고'
          width = {237} height={50} />
        </Link>
        
        <button onClick={() => setIsGnbOpen(true)}>
          <i className="fas fa-bars"></i>
        </button>
      </h1>
      
      {/* isGnbOpen 상태에 따라 'on' 클래스 추가 */}
      <nav id="gnb" className={isGnbOpen ? 'on' : ''} style={{ left: isGnbOpen ? '0' : '100%' }}>
        {/* 닫기 버튼 클릭 시 GNB 닫기 */}
        <div className="nav_close_btn" onClick={() => setIsGnbOpen(false)}>
          <i className="fas fa-times"></i>
        </div>
        <form>
          <ul>
            <li>
              <fieldset>
                <legend>검색폼</legend>
                <p>
                  <input type="search" id="search_box" placeholder="검색어 입력" />
                  <label htmlFor="search_box">
                    <i className="fas fa-search"></i>
                  </label>
                </p>
              </fieldset>
            </li>

            <li>
              <Link href="/" title="에스프레소 바" onClick={(e) => { e.preventDefault(); toggleSubMenu('espresso'); }}>
                ESPRESSO BAR<i className={`fas fa-angle-down ${openSubMenu === 'espresso' ? 'rotate' : ''}`}></i>
              </Link>
              <ul className="sub" style={{ display: openSubMenu === 'espresso' ? 'block' : 'none' }}>
                <li><Link href="/" title="에스프레소 바">ESPRESSO BAR</Link></li>
                <li><Link href="/" title="센트로">CENTRO</Link></li>
              </ul>
            </li>

            <li>
              <Link href="/" title="파스쿠찌" onClick={(e) => { e.preventDefault(); toggleSubMenu('pascucci'); }}>
                PASCUCCI<i className={`fas fa-angle-down ${openSubMenu === 'pascucci' ? 'rotate' : ''}`}></i>
              </Link>
              <ul className="sub" style={{ display: openSubMenu === 'pascucci' ? 'block' : 'none' }}>
                <li><Link href="/" title="헤리티지">헤리티지</Link></li>
                <li><Link href="/" title="브랜드 스토리">브랜드 스토리</Link></li>
                <li><Link href="/" title="메뉴 스토리">메뉴 스토리</Link></li>
              </ul>
            </li>
            
            <li>
              <Link href="/" title="고객지원" onClick={(e) => { e.preventDefault(); toggleSubMenu('customer'); }}>
                CUSTOMER<i className={`fas fa-angle-down ${openSubMenu === 'customer' ? 'rotate' : ''}`}></i>
              </Link>
              <ul className="sub" style={{ display: openSubMenu === 'customer' ? 'block' : 'none' }}>
                <li><Link href="/" title="제휴안내">제휴안내</Link></li>
                <li><Link href="/" title="자주하는 질문">자주하는 질문</Link></li>
                <li><Link href="/" title="1:1문의하기">1:1문의하기</Link></li>
              </ul>
            </li>
          </ul>
        </form>

        <div className="sns">
          <ul>
            <li>
              <Link href="/" title="인스타그램">
                {/* 이미지 경로 점(.) 제거, width/height 필수 */}
                <Image src="/images/sns_instar.png" alt="인스타그램" width={30} height={30} />
              </Link>
            </li>
            <li>
              <Link href="/" title="유튜브">
                <Image src="/images/sns_youtube.png" alt="유튜브" width={30} height={30} />
              </Link>
            </li>
            <li>
              <Link href="/" title="해피콘">
                <Image src="/images/ico_happycon.png" alt="해피콘" width={30} height={30} />
              </Link>
            </li>
          </ul>
        </div>
      </nav>


    </header>
  );
}

export default Header;