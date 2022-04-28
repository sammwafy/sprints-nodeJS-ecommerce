# sprints nodeJS ecommerce
Sprints is an ecommerce app build using MERN STACK

using React 18 🖤 for the frontend, NodeJS/expressJS for 
the backend and mongo/mongose for the database

demo :- https://tiny-gaufre-f204ae.netlify.app/
admin Dashboard :- https://tiny-gaufre-f204ae.netlify.app/admin

admin login details
/**
admin: admin@gmail.com
pass: 123456
**/

What guest can do ?
- guest can navigate website
- guest can see shop page
- guest can add products to cart
- guest can view cart
- guest can register a new account

What user can do ?
- user can login
- user can add items to cart
- user can view the cart / update items / discard items / change items quanitity
- user can checkout
- user can track product status and track delivery

What admin can do ?
- admin can access admin dashboard
- admin can add new products / edit products / edits or delete users 
- admin can change orders status / edit or delete orders
- admin can add coupons / edite or delete


** Auth is provided based on JWT Token authentication **
** dynamic naviagtion utilizng latest react router v6 features**

## Table of contents


- [Quick Start](#quick-start)
- [Docs](#docs)
- [License](#license)

## Quick Start
### To run locally:
```
download projectfiles
cd client & npm install
cd server & npm install
add .env file at the server folder containing :-
- mongo url
- jwt secret code
- CryptoJS pass code
- stripe secret code
```


## Docs
### App Structure
Within the download you'll find the following directories and files:
```
client
|-- package.json
📦src
 ┣ 📂Assets
 ┃ ┣ 📂imgs
 ┃ ┃ ┣ 📜checkCircle.gif
 ┃ ┃ ┣ 📜Spinner-3.gif
 ┃ ┃ ┣ 📜sprints.png
 ┃ ┃ ┣ 📜sprintsWhite.png
 ┃ ┃ ┣ 📜why1.svg
 ┃ ┃ ┣ 📜why2.svg
 ┃ ┃ ┣ 📜why3.svg
 ┃ ┃ ┗ 📜why4.svg
 ┃ ┗ 📜.gitkeep
 ┣ 📂Componenets
 ┃ ┣ 📂Admin-Dashboard
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┣ 📜AdminPage.js
 ┃ ┃ ┣ 📜OrderList.js
 ┃ ┃ ┣ 📜ProductList.js
 ┃ ┃ ┣ 📜ResultsDisplay.js
 ┃ ┃ ┣ 📜Statistics.js
 ┃ ┃ ┣ 📜TestChart.js
 ┃ ┃ ┗ 📜UsersList.js
 ┃ ┣ 📂AdminComponents
 ┃ ┃ ┣ 📂chart
 ┃ ┃ ┃ ┣ 📜Chart.jsx
 ┃ ┃ ┃ ┗ 📜chart.scss
 ┃ ┃ ┣ 📂coupon
 ┃ ┃ ┃ ┣ 📜Coupon.jsx
 ┃ ┃ ┃ ┣ 📜coupon.scss
 ┃ ┃ ┃ ┗ 📜CouponForm.jsx
 ┃ ┃ ┣ 📂datatable
 ┃ ┃ ┃ ┣ 📜DataTable.jsx
 ┃ ┃ ┃ ┗ 📜datatable.scss
 ┃ ┃ ┣ 📂featured
 ┃ ┃ ┃ ┣ 📜CircularProgressWithLabel.jsx
 ┃ ┃ ┃ ┣ 📜Featured.jsx
 ┃ ┃ ┃ ┗ 📜featured.scss
 ┃ ┃ ┣ 📂ItemCard
 ┃ ┃ ┃ ┣ 📜ItemCard.jsx
 ┃ ┃ ┃ ┣ 📜itemCard.scss
 ┃ ┃ ┃ ┣ 📜ProductCard.jsx
 ┃ ┃ ┃ ┗ 📜UserCard.jsx
 ┃ ┃ ┣ 📂layout
 ┃ ┃ ┃ ┗ 📜AdminLayout.jsx
 ┃ ┃ ┣ 📂navbar
 ┃ ┃ ┃ ┣ 📜NavBar.jsx
 ┃ ┃ ┃ ┗ 📜navbar.scss
 ┃ ┃ ┣ 📂sidebar
 ┃ ┃ ┃ ┣ 📜SideBar.jsx
 ┃ ┃ ┃ ┗ 📜sidebar.scss
 ┃ ┃ ┣ 📂table
 ┃ ┃ ┃ ┣ 📜table.scss
 ┃ ┃ ┃ ┗ 📜TableList.jsx
 ┃ ┃ ┣ 📂widgets
 ┃ ┃ ┃ ┣ 📜Widget.jsx
 ┃ ┃ ┃ ┣ 📜WidgetCustum.jsx
 ┃ ┃ ┃ ┗ 📜widgets.scss
 ┃ ┃ ┣ 📜UpdownInput.jsx
 ┃ ┃ ┗ 📜updowninput.scss
 ┃ ┣ 📂card
 ┃ ┃ ┣ 📜Card.jsx
 ┃ ┃ ┗ 📜card.scss
 ┃ ┣ 📂cardContainer
 ┃ ┃ ┣ 📜CardContainer.jsx
 ┃ ┃ ┣ 📜cardContainer.scss
 ┃ ┃ ┣ 📜CardContainer2.jsx
 ┃ ┃ ┗ 📜cardContainer2.scss
 ┃ ┣ 📂Carousels
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┣ 📜brands.styled.js
 ┃ ┃ ┃ ┣ 📜category-carousel.styled.js
 ┃ ┃ ┃ ┣ 📜fullscreen.styled.js
 ┃ ┃ ┃ ┣ 📜shopCarousel.styled.js
 ┃ ┃ ┃ ┗ 📜testimonial.styled.js
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┣ 📜brands-carousel.js
 ┃ ┃ ┣ 📜Carousel.js
 ┃ ┃ ┣ 📜category-carousel.js
 ┃ ┃ ┣ 📜fullScreen-carousel.js
 ┃ ┃ ┣ 📜ShopCarousel.js
 ┃ ┃ ┗ 📜testimonials.js
 ┃ ┣ 📂Cart
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┣ 📜Cart.jsx
 ┃ ┃ ┣ 📜cart.scss
 ┃ ┃ ┗ 📜Quantity.jsx
 ┃ ┣ 📂Checkout
 ┃ ┃ ┗ 📜.gitkeep
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┗ 📜footer.styled.js
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┗ 📜footer.js
 ┃ ┣ 📂Header
 ┃ ┃ ┣ 📂Logo
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┣ 📂User-Tools
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┗ 📜header.js
 ┃ ┣ 📂Item-cards
 ┃ ┃ ┗ 📜.gitkeep
 ┃ ┣ 📂Layout
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┗ 📜Layout.js
 ┃ ┣ 📂Menu
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┣ 📜nav.styled.js
 ┃ ┃ ┃ ┣ 📜topBar.styled.js
 ┃ ┃ ┃ ┗ 📜topNav.style.js
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┣ 📜Menu.js
 ┃ ┃ ┣ 📜TopBar.js
 ┃ ┃ ┗ 📜topNav.js
 ┃ ┣ 📂ProductView
 ┃ ┃ ┣ 📂featured
 ┃ ┃ ┃ ┣ 📜Card.js
 ┃ ┃ ┃ ┣ 📜FeaturedCategory.js
 ┃ ┃ ┃ ┗ 📜FeaturedProducts.js
 ┃ ┃ ┣ 📂productItems
 ┃ ┃ ┃ ┣ 📜AddToCarts.js
 ┃ ┃ ┃ ┣ 📜Description.js
 ┃ ┃ ┃ ┣ 📜ProductImgs.js
 ┃ ┃ ┃ ┣ 📜ProductTitle.js
 ┃ ┃ ┃ ┣ 📜Rating.js
 ┃ ┃ ┃ ┗ 📜Specs.js
 ┃ ┃ ┣ 📂Reviews
 ┃ ┃ ┃ ┣ 📜generateRandomAvatars.js
 ┃ ┃ ┃ ┣ 📜Review.js
 ┃ ┃ ┃ ┗ 📜ReviewPagination.js
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┣ 📜ShopHome.styled.js
 ┃ ┃ ┃ ┗ 📜SingleProduct.styled.js
 ┃ ┃ ┣ 📜ShopHome.js
 ┃ ┃ ┣ 📜SingleCategory.js
 ┃ ┃ ┗ 📜SingleProduct.js
 ┃ ┣ 📂Search
 ┃ ┃ ┣ 📜Search.js
 ┃ ┃ ┣ 📜SearchModal.js
 ┃ ┃ ┗ 📜SearchPagination.js
 ┃ ┣ 📂Sign-in
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┗ 📜sign-in.styled.js
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┗ 📜SignIn.js
 ┃ ┣ 📂Sign-up
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┗ 📜sign-up.styled.js
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┗ 📜Signup.js
 ┃ ┣ 📜.gitkeep
 ┃ ┣ 📜AdminComponents.zip
 ┃ ┗ 📜ScrollToTopOnMount.jsx
 ┣ 📂context
 ┃ ┗ 📜AuthProvider.js
 ┣ 📂export data
 ┃ ┗ 📜DataTableFields.js
 ┣ 📂fonts
 ┃ ┗ 📜.gitkeep
 ┣ 📂helper
 ┃ ┗ 📜addToCart.js
 ┣ 📂Hooks
 ┃ ┣ 📜.gitkeep
 ┃ ┣ 📜axios.js
 ┃ ┣ 📜useAuth.js
 ┃ ┗ 📜withRouter.js
 ┣ 📂Pages
 ┃ ┣ 📂404
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┗ 📜404.js
 ┃ ┣ 📂AdminEdit
 ┃ ┃ ┣ 📜AdminEdit.jsx
 ┃ ┃ ┗ 📜adminEdit.scss
 ┃ ┣ 📂AdminHome
 ┃ ┃ ┣ 📜Home.jsx
 ┃ ┃ ┗ 📜home.scss
 ┃ ┣ 📂AdminListComp
 ┃ ┃ ┣ 📜AdminList.jsx
 ┃ ┃ ┗ 📜AdminList.scss
 ┃ ┣ 📂AdminNew
 ┃ ┃ ┣ 📜New.jsx
 ┃ ┃ ┗ 📜new.scss
 ┃ ┣ 📂AdminSingle
 ┃ ┃ ┣ 📜Single.jsx
 ┃ ┃ ┗ 📜Single.scss
 ┃ ┣ 📂cart
 ┃ ┃ ┣ 📜CartPage.jsx
 ┃ ┃ ┗ 📜cartPage.scss
 ┃ ┣ 📂checkout
 ┃ ┃ ┗ 📜.gitkeep
 ┃ ┣ 📂coupon
 ┃ ┃ ┣ 📜CouponPage.jsx
 ┃ ┃ ┗ 📜couponPage.scss
 ┃ ┣ 📂dashboard
 ┃ ┃ ┗ 📜.gitkeep
 ┃ ┣ 📂homepage
 ┃ ┃ ┣ 📂styles
 ┃ ┃ ┃ ┗ 📜homePage.styled.js
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┣ 📜HomePage.js
 ┃ ┃ ┗ 📜whyUs.js
 ┃ ┣ 📂Login
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┗ 📜Login.js
 ┃ ┣ 📂Logout
 ┃ ┃ ┗ 📜Logout.js
 ┃ ┣ 📂Register
 ┃ ┃ ┗ 📜Register.js
 ┃ ┣ 📂shop
 ┃ ┃ ┣ 📜.gitkeep
 ┃ ┃ ┗ 📜Shop.js
 ┃ ┗ 📜UnderConstruc.js
 ┣ 📂store
 ┃ ┣ 📜cartSlice.js
 ┃ ┣ 📜ordersSlice.js
 ┃ ┣ 📜productsSlice.js
 ┃ ┣ 📜reset.js
 ┃ ┣ 📜store.js
 ┃ ┗ 📜usersSlice.js
 ┣ 📜.gitkeep
 ┣ 📜App.js
 ┣ 📜db.json
 ┣ 📜function palindrome(num) {.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜ProtectedAdminRoute.js
 ┗ 📜ProtectedRoute.js
```

server
|-- package.json
📦Server
 ┣ 📂Imgs
 ┣ 📜.env
 ┣ 📜.gitignore
 ┣ 📜.gitkeep
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜Procfile
 ┣ 📂routes
 ┣ 📜authentication.js
 ┣ 📜cart.js
 ┣ 📜copoun.js
 ┣ 📜order.js
 ┣ 📜product.js
 ┣ 📜stripe.js
 ┣ 📜user.js
 ┗ 📜verifyToken.js
 
## license
This Project is based on MIT License
