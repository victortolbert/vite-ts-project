<template>
    <div role="alert" class="breaking-news" part="breaking-news">
        <a target="_blank" class="headline-link" href="https://www.msn.com/en-us/entertainment/entertainment-celebrity/sidney-poitier-1st-black-man-to-win-best-actor-oscar-dies-at-94/ar-AASxBrN?ocid=msedgntp" data-t="{&quot;n&quot;:&quot;Link&quot;,&quot;t&quot;:11,&quot;b&quot;:1,&quot;c.hl&quot;:&quot;BREAKING NEWS: Sidney Poitier, 1st Black man to win Best Actor Oscar, dies at 94. Click for more ...&quot;}">
            <div class="headline&quot;">
                <span class="text text-bold">
                    BREAKING NEWS:
                </span>
                <span class="text">
                    <slot />
                </span>
            </div>
        </a>
    </div>
</template>

<style>
.breaking-news {
    display: grid;
    align-items: center;
    min-height: 38px;
    grid-template-columns: 1fr;
    overflow: hidden;
    border-radius: 2px;
    padding: 0px 24px;
    background-color: rgb(168, 5, 5);
    color: rgb(255, 255, 255);
    text-align: center;
    margin-bottom: 10px;
}
.breaking-news a {
    color: inherit;
    text-decoration: unset;
}
.breaking-news a:link:hover {
    text-decoration: underline;
}
</style>
