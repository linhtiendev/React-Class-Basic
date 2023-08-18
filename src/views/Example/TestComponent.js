import React from "react";


class TestComponent extends React.Component {

    // khởi tạo state rỗng
    state = {
        firstName: "",
        lastName: ""
    }

    // lưu state đã được thay đổi
    handleChangeFirstName = (event) => {
        this.setState({ 
            firstName: event.target.value 
        });
    }
    handleChangeLastName = (event) => {
        this.setState({ 
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault(); // hàm không tải lại website
        console.log("check data input", this.state);

    }
    /*
    -> tạo 1 form để lưu fname lname trong input 
    -> mỗi lần onChange đẫ lưu lại
    -> khi click submit thì nó lấy data đó truyền lên API
    */
    render() {
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.lastName} // muốn giá trị cập nhật realtime
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br/>
                    <br/>
                    <input 
                        type="submit" 
                        value="Submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form> 
            </>
        )
    }
}
export default TestComponent;