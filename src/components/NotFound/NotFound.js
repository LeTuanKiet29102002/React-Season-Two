import { Button } from "antd";
import '../../components/Home.scss';
import { useNavigate } from 'react-router-dom';


const NotFound = () => {
    const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };
    return (
        <div className="homepage-container">
        <h4>Trang này không hiển thị </h4>
        <p>Có thể liên kết đã hỏng hoặc trang đã bị gỡ. Hãy kiểm tra xem liên kết mà bạn đang cố mở có chính xác không</p>
        <Button className="mt-3" onClick={handleBack} >Back</Button>
    </div>
    )
    
}

export default NotFound;