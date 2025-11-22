/**
 * Exercise 5: Paginated Async Iterator
 */

class PaginatedIterator {
  constructor(fetchPage, pageSize = 10) {
    this.fetchPage = fetchPage;
    this.pageSize = pageSize;
  }

  async *[Symbol.asyncIterator]() {
    let page = 1;
    let hasMore = true;

    while (hasMore) {
      const data = await this.fetchPage(page, this.pageSize);

      yield* data.items;

      hasMore = data.hasMore;
      page++;
    }
  }
}

// Mock API function
const mockFetchPage = async (page, size) => {
  console.log(`Fetching page ${page}, size ${size}`);

  await new Promise(resolve => setTimeout(resolve, 100));

  const start = (page - 1) * size;
  const items = Array.from({ length: size }, (_, i) => ({
    id: start + i + 1,
    name: `Item ${start + i + 1}`
  }));

  return {
    items,
    hasMore: page < 5,
    page,
    totalPages: 5
  };
};

// Test
async function testPaginatedIterator() {
  const iterator = new PaginatedIterator(mockFetchPage, 10);

  let count = 0;

  for await (const item of iterator) {
    console.log(`Item ${item.id}: ${item.name}`);
    count++;

    if (count >= 25) break;
  }

  console.log(`Total items processed: ${count}`);
}

testPaginatedIterator();

export { PaginatedIterator };
