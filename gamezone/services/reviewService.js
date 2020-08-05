export default class ReviewService {
    static instance = null;

    constructor() {
        this.reviews = [
            { title: 'GTA San Andreas', rating: 5, body: 'Some game body', key: '1' },
            { title: 'Call of duty', rating: 4, body: 'Some game body', key: '2' },
            { title: 'FIFA 2020', rating: 3, body: 'Some game body', key: '3' }
        ];
    }

    static getInstance() {
        if(!this.instance)
            this.instance = new ReviewService();

        return this.instance;
    }

    getReviews() {
      return this.reviews;
    }

    addReview = (review) => {
        review.key = Math.random().toString();
        this.reviews.unshift(review);
    };
  }