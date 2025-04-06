import { useState } from "react";
import { Table, Pagination, Container } from "react-bootstrap";

export const LeaderboardList = ({ users }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 20;
    const totalPages = Math.ceil(users.length / itemsPerPage);

    const paginatedUsers = users.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Generate proper pagination items
    const getPaginationItems = () => {
        let items = [];
        const maxVisiblePages = 5;

        // Always show first page
        items.push(
            <Pagination.Item
                key={1}
                active={1 === currentPage}
                onClick={() => setCurrentPage(1)}
            >
                1
            </Pagination.Item>
        );

        // Show ellipsis if needed
        if (currentPage > maxVisiblePages - 1) {
            items.push(<Pagination.Ellipsis key="start-ellipsis" />);
        }

        // Show pages around current page
        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);

        for (let i = startPage; i <= endPage; i++) {
            items.push(
                <Pagination.Item
                    key={i}
                    active={i === currentPage}
                    onClick={() => setCurrentPage(i)}
                >
                    {i}
                </Pagination.Item>
            );
        }

        // Show ellipsis if needed
        if (currentPage < totalPages - (maxVisiblePages - 2)) {
            items.push(<Pagination.Ellipsis key="end-ellipsis" />);
        }

        // Always show last page if different from first
        if (totalPages > 1) {
            items.push(
                <Pagination.Item
                    key={totalPages}
                    active={totalPages === currentPage}
                    onClick={() => setCurrentPage(totalPages)}
                >
                    {totalPages}
                </Pagination.Item>
            );
        }

        return items;
    };

    return (
        <Container className="container">
            {/* Header */}
            <div>
                <h2>
                    <i>
                        LEADERBOARD
                    </i>
                </h2>
                <p>Top performers ranked by points</p>
            </div>

            <div>

                {/* Table */}
                <div className="table">
                    <Table hover className="mb-9">
                        <thead className="table-light">
                            <tr>
                                <th className="text-center">Rank</th>
                                <th className="ps-3">Player</th>
                                <th className="text-end pe-3">Points</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedUsers.map((user) => (
                                <tr key={user.id}>
                                    <td className="text-center align-middle">
                                        <div className={`d-inline-flex align-items-center justify-content-center rounded-circle ${user.rank <= 3 ? 'text-white' : 'text-secondary'}`}
                                            style={{
                                                width: '40px',
                                                height: '40px',
                                                background: user.rank === 1 ? '#FFD700' :
                                                    user.rank === 2 ? '#C0C0C0' :
                                                        user.rank === 3 ? '#CD7F32' : '#f8f9fa',
                                                fontWeight: '600'
                                            }}
                                        >
                                            #{user.rank}
                                        </div>
                                    </td>
                                    <td className="align-middle">
                                        <div className="d-flex align-items-center">
                                            <div className="rounded-circle bg-primary bg-opacity-10 d-flex align-items-center justify-content-center me-3"
                                                style={{ width: '40px', height: '40px' }}>
                                                <span className="text-primary fw-bold">{user.name.charAt(0)}</span>
                                            </div>
                                            <span className="fw-medium">{user.name}</span>
                                        </div>
                                    </td>
                                    <td className="text-end align-middle fw-bold text-primary">
                                        {user.points.toLocaleString()}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>

                <div className="pages">
                    <Pagination className="pages">
                        <Pagination.Prev
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="me-1"
                        />
                        {
                            getPaginationItems().map((item) => (
                                <Pagination.Item key={item.key}>
                                    {item}
                                </Pagination.Item>
                            ))
                        }
                        <Pagination.Next
                            disabled={currentPage === 1}
                            onClick={() => setCurrentPage(currentPage - 1)}
                            className="me-1"
                        />
                    </Pagination>
                </div>
            </div>
        </Container>
    );
};