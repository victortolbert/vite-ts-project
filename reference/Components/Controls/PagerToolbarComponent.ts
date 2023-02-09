import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component({
    template: "#pager-toolbar",
})
export default class PagerToolbarComponent extends Vue {
    @Prop()
    currentpage: number;

    CurrentPage = 1;

    @Prop()
    totalpages: number;

    HasPreviousEllipsis = false;

    HasNextEllipsis = false;

    _PageNumbers: number[] | undefined;

    key = 0;

    getPageNumbers(): number[] {
        if (this._PageNumbers === undefined) {
            const min = Math.floor((this.CurrentPage - 1) / 10) * 10 + 1;
            const max = Math.min((Math.floor((this.CurrentPage - 1) / 10) + 1) * 10, this.totalpages) || 1;
            this.HasPreviousEllipsis = min > 1;
            this.HasNextEllipsis = max < this.totalpages;
            this._PageNumbers = [...Array(max - min + 1)].map((x, i) => i + min);
        }
        return this._PageNumbers
    }

    setPageNumbers(pages: number[] | undefined) {
        this._PageNumbers = pages;
    }

    GetFirstPage(): void {
        this.CurrentPage !== 1 && this.GetPageByNumber(1);
    }

    GetLastPage(): void {
        this.CurrentPage !== this.totalpages && this.GetPageByNumber(this.totalpages);
    }

    GetNextEllipsisPage(): void {
        const pages = this.getPageNumbers();
        this.GetPageByNumber(pages[pages.length - 1] + 1);
    }

    GetNextPage(): void {
        this.CurrentPage < this.totalpages && this.GetPageByNumber(this.CurrentPage + 1)
    }

    GetPageByNumber(page: number): void {
        if (this.CurrentPage !== page) {
            this.CurrentPage = page;
            if (!this.getPageNumbers()?.includes(page)) {
                this.setPageNumbers(undefined);
                this.key++;
            }
            this.$emit("pagechange", page);
        }
    }

    GetPreviousEllipsisPage(): void {
        const pages = this.getPageNumbers();
        this.GetPageByNumber(pages[0] - 1);
    }

    GetPreviousPage(): void {
        this.CurrentPage > 1 && this.GetPageByNumber(this.CurrentPage - 1);
    }

    @Watch("currentpage")
    HandleCurrentPageChange(val: number) {
        this.CurrentPage = val;
        this.setPageNumbers(undefined);
        this.key++;
        console.log(val, this.CurrentPage)
    }
}