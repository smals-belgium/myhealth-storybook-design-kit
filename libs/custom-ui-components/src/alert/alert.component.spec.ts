import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AlertComponent } from './alert.component';
import { ComponentRef } from '@angular/core';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let componentRef: ComponentRef<AlertComponent>;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;

    componentRef = fixture.componentRef;
    componentRef.setInput('title', 'title');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit actionbuttonClicked when onActionButtonClicked is called', () => {
    jest.spyOn(component.actionButtonClicked, 'emit');
    component.onActionButtonClicked();
    expect(component.actionButtonClicked.emit).toHaveBeenCalled();
  });

  it('should emit closeButtonClicked when onCloseButtonClick is called', () => {
    jest.spyOn(component.closeButtonClicked, 'emit');
    component.onCloseButtonClick();
    expect(component.closeButtonClicked.emit).toHaveBeenCalled();
  });
});
