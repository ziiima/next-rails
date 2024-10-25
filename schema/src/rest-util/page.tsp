model Page<Item> {
  currentPage: uint64;
  perPage: uint64;
  totalCount: uint64;
  items: Item[];
}
