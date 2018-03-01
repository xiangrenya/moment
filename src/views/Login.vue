<template>
  <div class="container">
    <form>
      <div class="form-group">
        <label for="account">用户名</label>
        <input type="text" class="form-control"placeholder="Enter email">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="password">密码</label>
        <input type="password" class="form-control" placeholder="密码">
      </div>
      <div class="form-check">
        <label class="form-check-label">
          <input type="checkbox" class="form-check-input">
          记住我
        </label>
      </div>
      <button type="submit" class="btn btn-primary">登录</button>
    </form>
  </div>
</template>
