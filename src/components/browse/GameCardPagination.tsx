import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Link } from "react-router";
import { BROWSE_PATH } from "@/constants/PathConstants";

interface GameCardPaginationProps {
  activePage: number;
  totalPages: number;
}

const getPageNumbers = (activePage: number, totalPages: number) => {
  if (totalPages <= 5) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (activePage <= 3) {
    return [1, 2, 3, 4, 5, "..."];
  }

  if (activePage > totalPages - 3) {
    return [
      1,
      "...",
      totalPages - 4,
      totalPages - 3,
      totalPages - 2,
      totalPages - 1,
      totalPages,
    ];
  }

  return [1, "...", activePage - 1, activePage, activePage + 1, "..."];
};

const GameCardPagination: React.FC<GameCardPaginationProps> = ({
  activePage,
  totalPages,
}) => {
  return (
    <div>
      <Pagination className="mb-14">
        <PaginationContent className="flex flex-wrap justify-center">
          <PaginationItem>
            {activePage <= 1 ? (
              <PaginationPrevious
                aria-disabled={true}
                tabIndex={-1}
                className="pointer-events-none opacity-50"
                aria-label="Previous"
              />
            ) : (
              <Link to={`${BROWSE_PATH}?page=${activePage - 1}`}>
                <PaginationPrevious aria-label="Previous" />
              </Link>
            )}
          </PaginationItem>
          {getPageNumbers(activePage, totalPages).map((page, index) => (
            <PaginationItem key={index}>
              {page === "..." ? (
                <PaginationEllipsis />
              ) : (
                <Link to={`${BROWSE_PATH}?page=${page}`}>
                  <PaginationLink isActive={page === activePage}>
                    {page}
                  </PaginationLink>
                </Link>
              )}
            </PaginationItem>
          ))}
          <PaginationItem>
            {activePage >= totalPages ? (
              <PaginationNext
                aria-disabled={true}
                tabIndex={-1}
                className="pointer-events-none opacity-50"
                aria-label="Next"
              />
            ) : (
              <Link to={`${BROWSE_PATH}?page=${activePage + 1}`}>
                <PaginationNext aria-label="Next" />
              </Link>
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default GameCardPagination;
