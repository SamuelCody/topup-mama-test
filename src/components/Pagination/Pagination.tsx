import ReactPaginate from "react-paginate";
import styled from "styled-components";

interface PaginationProps {
  total: number;
  limit: number;
  pageClick?: (data: any) => void;
}

const Pagination: React.FC<PaginationProps> = ({ total, limit, pageClick }) => {
  return (
    <>
      <Container>
        <ReactPaginate
          previousLabel={"< Prev"}
          nextLabel={"Next >"}
          breakClassName="paginationBreak"
          breakLabel=".  .  ."
          breakLinkClassName={"paginationBreakLink"}
          pageCount={Math.ceil(total / limit)}
          marginPagesDisplayed={1}
          // pageRangeDisplayed={width < 768 ? 1 : 2}
          pageRangeDisplayed={3}
          onPageChange={pageClick}
          containerClassName={"paginationContainer"}
          pageClassName="paginationPage"
          pageLinkClassName="paginationPageLink"
          previousClassName="paginationPrevious"
          previousLinkClassName="paginationPreviousLink"
          disabledClassName="paginateDisabled"
          nextClassName="paginationNext"
          nextLinkClassName="paginationNextLink"
          activeLinkClassName="paginationActiveLink"
          activeClassName="paginationActive"
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  padding: 1rem 0;
`;

export default Pagination;
