1. Pages are put inside routes folder => chat,dashboard, home, signIn, signUp
2. Routing done using "react-router-dom"
3. All routing logic put inside `"router"` in main.jax and passed to `RouterProvider`
   -Each route has 1 path and element(page.jsx). But if nested route=> 1 path(main route) and children array(even main is inside children)

4. Logo there in every page at same place. So instead of creating it in every page=> create a layout and send it as children

- Create layouts folder and rootLayout for this navbar(logo and profile)
- Navbar will go in header and all children(every component under nav) will go in Outlet.
- For "/" : Use this rootLayout in router in main.jsx and every other component(with path) as its child. These children will be in Outlet of rootLayout.This way navbar displayed in every page

- For "/dashboard/..." => dashboardLayout 
--------------

` AUTHENTICATION `:


- Using Clerk library. Provides PUBLISHABLE_KEY & to be put inside .env
- App needs to be wrapped with ClerkProvider. Since we using routes using dom=> wrap rootLayout instead.
- define routes for sign-in, sign-up inside main.jsx and use <SignIn../> and <SignOut..> in these pages. 

`Route Protection`
- Anything under /dashboard and chats should not be accessed to not signed in users
- useAuth() from clerk gives userId. If userId not there while loading Dashboard=> redirect to sign-in

-------------------

- A negative margin on an element allows it to eat up the space of its parent container.
