const inputs = document.querySelectorAll(".input");


function addcl()
{
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl()
{
	let parent = this.parentNode.parentNode;
	if(this.value == "")
	{
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => 
{
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});

function login() 
{
    // Kiểm tra thông tin đăng nhập (đơn giản cho ví dụ)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'hnim.thy' && (password === '151.154.171.163.155' || password === '151 154 171 163 155' || password === '151154171163155'))
	{ // Điều kiện kiểm tra
    	// Ẩn giao diện đăng nhập và hiển thị giao diện chính
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('main-container').style.display = 'block';
		return false;
    } 
	else 
	{
        alert('Thông tin đăng nhập không chính xác.');
    }
}