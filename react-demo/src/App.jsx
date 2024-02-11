// import Button from "./components/atoms/Button";
// import Card from "./components/molecules/Card";
// import LabeledInput from "./components/molecules/LabeledInput";
import LoginForm from "./components/molecules/LoginForm";
import MainLayout from "./components/templates/MainLayout";

function App() {
  return (
    <MainLayout>
      {/* <div className="flex gap-3 p-4 h-fit">
        <Button />
        <LabeledInput label="Username" />
        <LabeledInput label="Email" />
        <Card />
      </div> */}
      <div className="h-[500px] grid place-items-center">
        <LoginForm />
      </div>
    </MainLayout>
  );
}

export default App;
