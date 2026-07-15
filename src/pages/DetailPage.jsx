import { Link, useParams } from "react-router"

export default function DetailPage() {
    const params = useParams()
    console.log(params);


    return (
        <>
            {/* ===================== PAGE 2: MOVIE DETAIL ===================== */}
            <div id="page-detail">
                <Link to={'/'} className="detail-back">
                    <svg
                        width={16}
                        height={16}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <polyline points="15 18 9 12 15 6" />
                    </svg>
                    Back to results
                </Link>
                <div className="detail-hero" style={{ position: "relative" }}>
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            zIndex: 0,
                            backgroundImage:
                                'url("https://image.tmdb.org/t/p/w1280/s3TBrRGB1iav7gFOCNx3H31MoES.jpg")',
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            opacity: "0.07",
                            borderRadius: 0,
                            pointerEvents: "none"
                        }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            zIndex: 0,
                            background:
                                "linear-gradient(to right, rgba(12,14,20,0) 0%, rgba(12,14,20,0.95) 55%)",
                            pointerEvents: "none"
                        }}
                    />
                    {/* Poster */}
                    <div style={{ position: "relative", zIndex: 1 }}>
                        <div className="detail-poster">
                            <img
                                className="detail-poster-img"
                                src="https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg"
                                alt="Inception poster"
                            />
                        </div>
                        {/* Scores */}
                        <div
                            style={{
                                marginTop: 20,
                                background: "var(--surface)",
                                border: "1px solid var(--border)",
                                borderRadius: "var(--radius)",
                                padding: 18
                            }}
                        >
                            <div
                                style={{
                                    fontSize: 12,
                                    color: "var(--text3)",
                                    textTransform: "uppercase",
                                    letterSpacing: "0.8px",
                                    marginBottom: 14,
                                    fontWeight: 500
                                }}
                            >
                                Score breakdown
                            </div>
                            <div className="score-bar-wrap">
                                <span className="score-label">Story</span>
                                <div className="score-bar-bg">
                                    <div className="score-bar-fill" style={{ width: "94%" }} />
                                </div>
                                <span className="score-pct">9.4</span>
                            </div>
                            <div className="score-bar-wrap">
                                <span className="score-label">Visuals</span>
                                <div className="score-bar-bg">
                                    <div className="score-bar-fill" style={{ width: "92%" }} />
                                </div>
                                <span className="score-pct">9.2</span>
                            </div>
                            <div className="score-bar-wrap">
                                <span className="score-label">Acting</span>
                                <div className="score-bar-bg">
                                    <div className="score-bar-fill" style={{ width: "88%" }} />
                                </div>
                                <span className="score-pct">8.8</span>
                            </div>
                            <div className="score-bar-wrap">
                                <span className="score-label">Soundtrack</span>
                                <div className="score-bar-bg">
                                    <div className="score-bar-fill" style={{ width: "90%" }} />
                                </div>
                                <span className="score-pct">9.0</span>
                            </div>
                        </div>
                        <div style={{ marginTop: 12 }}>
                            <div className="api-badge">
                                <div className="api-dot" />
                                GET /movie/{"{"}id{"}"}
                            </div>
                        </div>
                    </div>
                    {/* Content */}
                    <div
                        className="detail-content"
                        style={{ position: "relative", zIndex: 1 }}
                    >
                        <div className="detail-genres">
                            <span className="genre-tag">Sci-Fi</span>
                            <span className="genre-tag">Action</span>
                            <span className="genre-tag">Thriller</span>
                            <span className="genre-tag">Mystery</span>
                        </div>
                        <h1 className="detail-title">Inception</h1>
                        <div className="detail-meta-row">
                            <div className="rating-big">
                                <svg width={16} height={16} viewBox="0 0 24 24" fill="#E8C547">
                                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                </svg>
                                <div>
                                    <div className="rating-score">8.8</div>
                                    <div className="rating-sub">TMDB Score</div>
                                </div>
                                <div>
                                    <div className="rating-count">2.4M votes</div>
                                </div>
                            </div>
                            <div className="meta-item">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <rect x={3} y={4} width={18} height={18} rx={2} />
                                    <line x1={16} y1={2} x2={16} y2={6} />
                                    <line x1={8} y1={2} x2={8} y2={6} />
                                    <line x1={3} y1={10} x2={21} y2={10} />
                                </svg>
                                July 16, 2010
                            </div>
                            <div className="meta-item">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <circle cx={12} cy={12} r={10} />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                2h 28m
                            </div>
                            <div className="meta-item">
                                <svg
                                    width={15}
                                    height={15}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                PG-13
                            </div>
                        </div>
                        <p className="detail-overview">
                            A thief who steals corporate secrets through the use of dream-sharing
                            technology is given the inverse task of planting an idea into the mind
                            of a C.E.O., but his tragic past may doom the project and his team to
                            disaster. A visually stunning and intellectually challenging journey
                            through layers of consciousness.
                        </p>
                        <div className="detail-actions">
                            <button className="btn-primary">
                                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                </svg>
                                Watch Trailer
                            </button>
                            <button className="btn-secondary">
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                                </svg>
                                Add to Watchlist
                            </button>
                            <button className="btn-secondary">
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                                Favorite
                            </button>
                            <button className="btn-secondary">
                                <svg
                                    width={16}
                                    height={16}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <circle cx={18} cy={5} r={3} />
                                    <circle cx={6} cy={12} r={3} />
                                    <circle cx={18} cy={19} r={3} />
                                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                                </svg>
                                Share
                            </button>
                        </div>
                        {/* Fact cards */}
                        <div className="detail-facts">
                            <div className="fact-card">
                                <div className="fact-label">Director</div>
                                <div className="fact-value" style={{ fontSize: 16 }}>
                                    Christopher Nolan
                                </div>
                                <div className="fact-sub">Writer &amp; Producer</div>
                            </div>
                            <div className="fact-card">
                                <div className="fact-label">Budget</div>
                                <div className="fact-value">$160M</div>
                                <div className="fact-sub">Production budget</div>
                            </div>
                            <div className="fact-card">
                                <div className="fact-label">Box Office</div>
                                <div className="fact-value">$836M</div>
                                <div className="fact-sub">Worldwide gross</div>
                            </div>
                            <div className="fact-card">
                                <div className="fact-label">Language</div>
                                <div className="fact-value" style={{ fontSize: 16 }}>
                                    English
                                </div>
                                <div className="fact-sub">Original language</div>
                            </div>
                            <div className="fact-card">
                                <div className="fact-label">Status</div>
                                <div
                                    className="fact-value"
                                    style={{ fontSize: 14, color: "var(--green)" }}
                                >
                                    Released
                                </div>
                                <div className="fact-sub">Streaming available</div>
                            </div>
                            <div className="fact-card">
                                <div className="fact-label">Popularity</div>
                                <div className="fact-value">87.4</div>
                                <div className="fact-sub">TMDB score</div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="section-divider" style={{ margin: "0 40px 40px" }} />
                {/* Cast */}
                <div className="detail-section">
                    <div className="section-header" style={{ marginBottom: 20 }}>
                        <div className="section-title">Top cast</div>
                        <div
                            style={{ fontSize: 13, color: "var(--accent)", cursor: "pointer" }}
                        >
                            View all cast →
                        </div>
                    </div>
                    <div className="cast-grid">
                        <div className="cast-card">
                            <div className="cast-avatar">LDC</div>
                            <div className="cast-name">Leonardo DiCaprio</div>
                            <div className="cast-role">Dom Cobb</div>
                        </div>
                        <div className="cast-card">
                            <div className="cast-avatar">JGL</div>
                            <div className="cast-name">Joseph Gordon-Levitt</div>
                            <div className="cast-role">Arthur</div>
                        </div>
                        <div className="cast-card">
                            <div className="cast-avatar">EP</div>
                            <div className="cast-name">Ellen Page</div>
                            <div className="cast-role">Ariadne</div>
                        </div>
                        <div className="cast-card">
                            <div className="cast-avatar">TH</div>
                            <div className="cast-name">Tom Hardy</div>
                            <div className="cast-role">Eames</div>
                        </div>
                        <div className="cast-card">
                            <div className="cast-avatar">KW</div>
                            <div className="cast-name">Ken Watanabe</div>
                            <div className="cast-role">Saito</div>
                        </div>
                        <div className="cast-card">
                            <div className="cast-avatar">DW</div>
                            <div className="cast-name">Dileep Rao</div>
                            <div className="cast-role">Yusuf</div>
                        </div>
                    </div>
                </div>
                <hr className="section-divider" style={{ margin: "0 40px 40px" }} />
                {/* Similar movies */}
                <div className="detail-section">
                    <div className="section-header" style={{ marginBottom: 20 }}>
                        <div className="section-title">You might also like</div>
                        <div
                            style={{ fontSize: 13, color: "var(--accent)", cursor: "pointer" }}
                        >
                            See more →
                        </div>
                    </div>
                    <div className="similar-grid">
                        <div className="movie-card" onclick="showPage('detail')">
                            <div className="movie-poster">
                                <img
                                    className="poster-img"
                                    src="https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
                                    alt="Interstellar poster"
                                />
                                <div className="poster-badge">★ 8.7</div>
                            </div>
                            <div className="movie-info">
                                <div className="movie-title">Interstellar</div>
                                <div className="movie-year">2014</div>
                                <div className="movie-tags">
                                    <span className="tag">Sci-Fi</span>
                                </div>
                            </div>
                        </div>
                        <div className="movie-card" onclick="showPage('detail')">
                            <div className="movie-poster">
                                <img
                                    className="poster-img"
                                    src="https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"
                                    alt="The Matrix poster"
                                />
                                <div className="poster-badge">★ 8.1</div>
                            </div>
                            <div className="movie-info">
                                <div className="movie-title">The Matrix</div>
                                <div className="movie-year">1999</div>
                                <div className="movie-tags">
                                    <span className="tag">Sci-Fi</span>
                                </div>
                            </div>
                        </div>
                        <div className="movie-card" onclick="showPage('detail')">
                            <div className="movie-poster">
                                <img
                                    className="poster-img"
                                    src="https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"
                                    alt="The Dark Knight poster"
                                />
                                <div className="poster-badge">★ 9.0</div>
                            </div>
                            <div className="movie-info">
                                <div className="movie-title">The Dark Knight</div>
                                <div className="movie-year">2008</div>
                                <div className="movie-tags">
                                    <span className="tag">Action</span>
                                </div>
                            </div>
                        </div>
                        <div className="movie-card" onclick="showPage('detail')">
                            <div className="movie-poster">
                                <img
                                    className="poster-img"
                                    src="https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg"
                                    alt="Arrival poster"
                                />
                                <div className="poster-badge">★ 8.4</div>
                            </div>
                            <div className="movie-info">
                                <div className="movie-title">Arrival</div>
                                <div className="movie-year">2016</div>
                                <div className="movie-tags">
                                    <span className="tag">Sci-Fi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ height: 60 }} />
            </div>
        </>
    )
}