(function () {
    $(".custom-slider").slider({
        range: true,
        min: 0,
        max: 100,
        values: [0, 100],
    });
    // 产品系列过滤器超过六个 点击展开或收缩
    $(".new-collection-click").click(function () {
        $(this).toggleClass("collapsed");
        $(".collection__sidebar__group.new-collection-hide").toggleClass("hide-pc");
        // $('#toggle-button').text($('#toggle-div').hasClass('collapsed') ? '展开' : '收缩');
    });
    $(".toggle-buttons a").click(function () {
        $(".new-product-nav-container").toggleClass("is-open");
    });

    // 从 sessionStorage 中获取“bar”变量
    var bar = sessionStorage.getItem('bar');

    // 如果存在值，则使 底部bar 持续显示
    if (bar === 'visible') {
        document.querySelector('.new-product-nav-container').className = 'new-product-nav-container is-open';
    }

    // 添加点击事件侦听器到按钮
    if (document.querySelector('.new-product-nav-click button')) {
        document.querySelector('.new-product-nav-click button').addEventListener('click', function () {
            // 记录“bar”的值以标记已经点击了按钮，并在 sessionStorage 中进行设置
            sessionStorage.setItem('bar', 'visible');
            // 显示 底部bar
            document.querySelector('.new-product-nav-container').className = 'new-product-nav-container is-open';
        });
    }
    var product_list = document.querySelectorAll('.selected-product-placeholder .cart__item')
    if (product_list) {
        product_list.forEach((button)={
            button.addEventLister
        })
    }
    // 表格 排序

    // let suffix = "?sort_by=price-ascending"; // 初始的查询参数

    // $(".new-price-sort").click(function () {
    //     console.log(this.getAttribute('data-value'))
    //     let currentValue = this.getAttribute("data-value");
    //     const newSuffix = suffix === "?sort_by=price-ascending" ? "?sort_by=price-descending" : "?sort_by=price-ascending"; // 根据之前的状态更改新的 query 参数
    //     suffix = newSuffix; // 更新状态为新的 query 参数
    //     this.setAttribute("data-value", newSuffix);
    //     const newUrl = window.location.href.replace(/\?.*$/, '') + suffix; // 把后缀添加到当前URL中，并更新 URL
    //     //   window.location.href = newUrl;
    //     history.pushState({}, null, newUrl); // 使用 pushState 更新浏览器历史记录和URL
    //     // 在此处更新页面内容
    //     //   location.reload(); // 在此处添加代码以重新加载页面
    // });
    $(".new-certification-link").click(function () {
        var urlRegex = /https?:\/\/[^\s]+/g;
        var divContent = $('#new-custom-infos').text();
        var matchedUrls = divContent.match(urlRegex);
        var lastValue = matchedUrls.pop();
        var iframeElement = document.querySelector('.new-certification-popup-container iframe');
        iframeElement.src = lastValue;
        $(".new-certification-popup").addClass("active");
    });
    $(".new-certification-close").click(function () {
        $(".new-certification-popup").removeClass("active");
    });
})();

document.addEventListener("DOMContentLoaded", function (event) {
    var newProductNav = document.querySelector(".new-product-nav-container");
    var newProductNavButton = document.querySelector(".new-product-nav-click button");
    var cartDrawerEnabled = window.theme.settings.cartDrawerEnabled;
    if (newProductNavButton) {
        newProductNavButton.addEventListener('click', (e) => {
            e.preventDefault();
            if (cartDrawerEnabled) {
                // e.currentTarget.classList.add('is-loading');
                // e.currentTarget.setAttribute('disabled', 'disabled');
            }
        }, false);
    }
    var closeButton = document.querySelector('[data-new-nav-item-cart2] [data-item-remove]');
    if (closeButton) {
        closeButton.addEventListener('click', (e) => {
            e.preventDefault();
            window.sessionStorage.removeItem('this.newNavItemCart2.innerHTML');
            window.sessionStorage.removeItem('this.newCartTotal.innerHTML');
            // 重载当前页面
            location.reload(true);
        }, false);
    }

    var closeButton1 = document.querySelector('[data-new-nav-item-cart] [data-item-remove]');
    if (closeButton1) {
        closeButton1.addEventListener('click', (e) => {
            e.preventDefault();
            window.sessionStorage.removeItem('this.newNavItemCart.innerHTML');
            window.sessionStorage.removeItem('this.newCartTotal.innerHTML');
            // 重载当前页面
            location.reload(true);
        }, false);
    }


})
