import Button from "./components/atoms/Button";
import LabeledInput from "./components/molecules/LabeledInput";
import Card from "./components/organisms/Card";
import MainLayout from "./components/templates/MainLayout";

function App() {
  return (
    <MainLayout>
      <div className="flex gap-3 p-4 h-fit">
        <Button />
        <LabeledInput label="Username" />
        <LabeledInput label="Email" />
        <Card />
      </div>
    </MainLayout>
  );
}

export default App;
