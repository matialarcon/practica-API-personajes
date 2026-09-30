export function Pagination({ page, setPage, totalPages }) {
    if (totalPages <= 1) return null

    /*Aquí se crea un array desde cero compuesto por numeros de 1 hasta la cantidad de páginas actual.*/
    const pages = Array.from({ length: totalPages - 1 }, (_, i) => i + 1)

    /*Aquí se recorta para mostrarse solo los 3 primeros números desde la página actual en el paginador.*/
    const pagesVisible = pages.slice(page - 1, page + 2)

    return (
        <>
            <div className="pages-counter">Página {page} de {totalPages}</div>

            <div className="paginator-container">
                <div>
                    <button disabled={page === 1} onClick={() => setPage(prevState => prevState - 1)} className="pages-change-button page-turner" title="Ir a la página anterior">«</button>
                </div>

                <ul className="pages-change-button-list">
                    {page > 1 && (
                        <li><button onClick={() => setPage(1)} className="pages-change-button">1</button></li>
                    )}

                    {(page > 2) && (
                        <li>...</li>
                    )}
                    
                    {pagesVisible.map(pageVisible => (
                        <li key={pageVisible}>
                            <button disabled={pageVisible === page} onClick={() => setPage(pageVisible)} className="pages-change-button">
                                {pageVisible}
                            </button>
                        </li>
                    ))}

                    {page < totalPages - 3 && (
                        <li>...</li>
                    )}

                    <li><button disabled={totalPages === page} onClick={() => setPage(totalPages)} className="pages-change-button">{totalPages}</button></li>
                </ul>

                <div>
                    <button disabled={page === totalPages} onClick={() => setPage(prevState => prevState + 1)} className="pages-change-button page-turner" title="Ir a la página siguiente">»</button>
                </div>
            </div>
        </>
    )
}